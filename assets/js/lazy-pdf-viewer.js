import * as pdfjsLib from "/assets/vendor/pdfjs/pdf.min.js";

(function () {
  "use strict";

  var container = document.getElementById("pdf-container");
  var pdfURL = container && container.dataset.pdfUrl;
  var pdfKind = container && container.dataset.pdfKind;
  if (pdfKind) {
    var requestedTheme = new URLSearchParams(window.location.search).get("theme") || "light";
    var version = requestedTheme === "dark" ? "v2" : (requestedTheme === "royal" ? "v3" : "v1");
    pdfURL = "/files/" + version + "_" + pdfKind + ".pdf";
  }
  var workerURL = "/assets/vendor/pdfjs/pdf.worker.min.js";
  var pageStates = [];
  var queuedPages = [];
  var renderedPages = new Map();
  var observer = null;
  var pdfDocument = null;
  var rendering = false;
  var destroyed = false;
  var suspended = false;
  var sentReady = false;

  function notifyParent(type) {
    if (window.parent !== window) {
      window.parent.postMessage({ type: type, source: pdfURL }, window.location.origin);
    }
  }

  function showError() {
    if (!container) return;
    container.textContent = "The document could not be displayed. Please use the download link instead.";
    container.classList.add("pdf-error");
    notifyParent("pdf-viewer-error");
  }

  function schedule(callback) {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(callback, { timeout: 240 });
    } else {
      window.setTimeout(callback, 16);
    }
  }

  function distanceFromViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewportCenter = window.innerHeight / 2;
    return Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
  }

  function queuePage(index) {
    var state = pageStates[index];
    if (suspended || !state || state.status !== "idle") return;
    state.status = "queued";
    queuedPages.push(index);
    queuedPages.sort(function (a, b) {
      return distanceFromViewport(pageStates[a].element) - distanceFromViewport(pageStates[b].element);
    });
    pumpQueue();
  }

  function trimCanvasCache(activeIndex) {
    /* A PDF page at desktop width and 2x DPR can occupy 10–14 MB decoded.
       Retaining eight pages was the main reason tabs could climb past 100 MB. */
    var maxCanvases = window.innerWidth <= 600 ? 2 : 3;
    if (renderedPages.size <= maxCanvases) return;

    var candidates = Array.from(renderedPages.entries())
      .filter(function (entry) {
        var state = pageStates[entry[0]];
        return entry[0] !== activeIndex && state && !state.nearViewport;
      })
      .sort(function (a, b) { return a[1].lastUsed - b[1].lastUsed; });

    while (renderedPages.size > maxCanvases && candidates.length) {
      var entry = candidates.shift();
      var index = entry[0];
      var state = pageStates[index];
      if (!state || state.status !== "rendered") continue;
      entry[1].canvas.width = 1;
      entry[1].canvas.height = 1;
      entry[1].canvas.remove();
      renderedPages.delete(index);
      state.status = "idle";
      state.canvas = null;
    }
  }

  async function renderPage(index) {
    var state = pageStates[index];
    if (!state || destroyed || suspended || !pdfDocument) return;
    state.status = "rendering";

    try {
      var page = await pdfDocument.getPage(index + 1);
      if (destroyed) return;

      var baseViewport = page.getViewport({ scale: 1 });
      var cssWidth = Math.max(1, state.element.clientWidth || container.clientWidth || baseViewport.width);
      /* Mobile viewers deliberately render at a slightly lower backing scale:
         the PDF page stays fixed-layout, while first paint is substantially
         cheaper on narrow high-DPI devices. */
      var ratioCap = window.innerWidth <= 600 ? 1.5 : 2;
      var pixelRatio = Math.min(window.devicePixelRatio || 1, ratioCap);
      var renderScale = (cssWidth / baseViewport.width) * pixelRatio;
      var viewport = page.getViewport({ scale: renderScale });
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d", { alpha: false, desynchronized: true });
      state.canvas = canvas;

      state.element.style.aspectRatio = baseViewport.width + " / " + baseViewport.height;
      canvas.width = Math.max(1, Math.floor(viewport.width));
      canvas.height = Math.max(1, Math.floor(viewport.height));
      canvas.setAttribute("aria-label", "Page " + (index + 1));
      state.element.appendChild(canvas);

      await page.render({
        canvasContext: context,
        viewport: viewport,
        background: "rgb(255,255,255)"
      }).promise;

      if (destroyed || suspended) {
        canvas.width = 1;
        canvas.height = 1;
        canvas.remove();
        state.canvas = null;
        state.status = "idle";
        page.cleanup();
        return;
      }
      state.status = "rendered";
      renderedPages.set(index, { canvas: canvas, lastUsed: performance.now() });
      trimCanvasCache(index);
      page.cleanup();

      if (!sentReady) {
        sentReady = true;
        notifyParent("pdf-viewer-ready");
        if (!observer && pageStates.length > 1) {
          attachScrollObserver();
        }
      }
    } catch (error) {
      state.status = "idle";
      if (!sentReady) showError();
    }
  }

  function pumpQueue() {
    if (rendering || destroyed || suspended || !queuedPages.length) return;
    rendering = true;
    var index = queuedPages.shift();
    schedule(function () {
      renderPage(index).finally(function () {
        rendering = false;
        pumpQueue();
      });
    });
  }

  function attachScrollObserver() {
    if (observer || destroyed || suspended || pageStates.length <= 1) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var index = Number(entry.target.dataset.pageNumber) - 1;
        if (!pageStates[index]) return;
        pageStates[index].nearViewport = entry.isIntersecting;
        if (entry.isIntersecting) {
          var cached = renderedPages.get(index);
          if (cached) cached.lastUsed = performance.now();
          queuePage(index);
        }
      });
    }, { rootMargin: "0px" });

    pageStates.forEach(function (state) { observer.observe(state.element); });
  }

  function buildPagePlaceholders(pageCount, aspectRatio) {
    var fragment = document.createDocumentFragment();
    for (var index = 0; index < pageCount; index += 1) {
      var pageElement = document.createElement("div");
      pageElement.className = "pdf-page";
      pageElement.style.aspectRatio = aspectRatio;
      pageElement.dataset.pageNumber = String(index + 1);
      pageStates.push({ element: pageElement, status: "idle", nearViewport: false, canvas: null });
      fragment.appendChild(pageElement);
    }
    container.appendChild(fragment);

    /* Render only page 0 on initial open to match the speed and algorithm of Resume/CV. */
    pageStates[0].nearViewport = true;
    queuePage(0);

    /* For multi-page PDFs, wire user scroll/touch listeners to activate the observer */
    if (pageCount > 1) {
      window.addEventListener("scroll", attachScrollObserver, { passive: true, once: true });
      window.addEventListener("wheel", attachScrollObserver, { passive: true, once: true });
      window.addEventListener("touchmove", attachScrollObserver, { passive: true, once: true });
    }
  }

  async function initialise() {
    if (!pdfURL || !container || !pdfjsLib) {
      showError();
      return;
    }

    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerURL;
      pdfDocument = await pdfjsLib.getDocument({ url: pdfURL }).promise;
      var firstPage = await pdfDocument.getPage(1);
      var viewport = firstPage.getViewport({ scale: 1 });
      firstPage.cleanup();
      buildPagePlaceholders(pdfDocument.numPages, viewport.width + " / " + viewport.height);
    } catch (error) {
      showError();
    }
  }

  function releaseRenderedPages() {
    queuedPages.length = 0;
    renderedPages.forEach(function (entry, index) {
      entry.canvas.width = 1;
      entry.canvas.height = 1;
      entry.canvas.remove();
      var state = pageStates[index];
      if (state) {
        state.canvas = null;
        state.status = "idle";
      }
    });
    renderedPages.clear();
  }

  window.addEventListener("message", function (event) {
    if (event.origin !== window.location.origin || event.source !== window.parent || !event.data) return;
    if (event.data.type === "pdf-viewer-suspend") {
      suspended = true;
      sentReady = false;
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      releaseRenderedPages();
    } else if (event.data.type === "pdf-viewer-resume") {
      if (!suspended || destroyed) return;
      suspended = false;
      var queuedVisiblePage = false;
      pageStates.forEach(function (state, index) {
        if (state.nearViewport) {
          queuedVisiblePage = true;
          queuePage(index);
        }
      });
      if (!queuedVisiblePage) queuePage(0);
      pumpQueue();
      if (pageStates.length > 1) {
        attachScrollObserver();
      }
    }
  });

  window.addEventListener("pagehide", function () {
    destroyed = true;
    suspended = true;
    if (observer) observer.disconnect();
    releaseRenderedPages();
    pageStates.forEach(function (state) {
      if (state.canvas) {
        state.canvas.width = 1;
        state.canvas.height = 1;
        state.canvas.remove();
        state.canvas = null;
      }
    });
    if (pdfDocument) pdfDocument.destroy();
  }, { once: true });

  initialise();
})();
