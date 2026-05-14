/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // FitVids init
  fitvids();

  /* ── Footer push: bbox-based, JS-only ──
     Reads footer's CURRENT bottom via getBoundingClientRect (no forced
     layout when called inside rAF — layout already settled).
     diff = vpH - footer.bottom. positive = footer above viewport bottom
     (need more push). Negative = below (need less).
     newPush = max(0, lastPush + diff). Self-correcting per frame.

     Critical: `margin-top: auto` from CSS is NOT used (would conflict with
     explicit JS write). _sass/_footer.scss should set margin-top: 0. */
  var $footer = $(".page__footer");
  var footerEl = $footer[0];
  var lastPush = 0;
  var footerScheduled = false;

  function calcAndApplyPush() {
    footerScheduled = false;
    if (!footerEl) return;
    var rect = footerEl.getBoundingClientRect();
    var vpH = window.innerHeight;
    var diff = vpH - rect.bottom;
    var newPush = Math.max(0, lastPush + diff);
    /* Sub-px tolerance breaks any rounding-induced loops. */
    if (Math.abs(newPush - lastPush) < 1) return;
    lastPush = newPush;
    footerEl.style.marginTop = newPush + 'px';
  }

  function scheduleFooterDockUpdate() {
    if (footerScheduled) return;
    footerScheduled = true;
    window.requestAnimationFrame(calcAndApplyPush);
  }

  /* ── rAF pump for transitions ──
     RO on body misses frames when body height is locked by min-height
     (short pages w/ small content): body doesn't change size as descendant
     content shrinks, so RO never fires, footer never updates -> footer ends
     above viewport bottom. Open/close handlers call window.smoothFooterPush
     to pump push calc per frame for the transition duration regardless. */
  var pumpUntil = 0;
  var pumping = false;
  function pumpTick() {
    calcAndApplyPush();
    if (performance.now() < pumpUntil) {
      window.requestAnimationFrame(pumpTick);
    } else {
      pumping = false;
      /* one extra calc after settle to catch final state */
      window.requestAnimationFrame(calcAndApplyPush);
    }
  }
  window.smoothFooterPush = function (durationMs) {
    pumpUntil = Math.max(pumpUntil, performance.now() + (durationMs || 700));
    if (!pumping) {
      pumping = true;
      window.requestAnimationFrame(pumpTick);
    }
  };

  /* Initial: defer until layout settles */
  scheduleFooterDockUpdate();

  if (typeof ResizeObserver !== "undefined" && document.body) {
    var bodyResizeObserver = new ResizeObserver(scheduleFooterDockUpdate);
    bodyResizeObserver.observe(document.body);
  }

  // Follow menu drop down — teleport to body for Chrome backdrop-filter support
  var $authorUrls = $(".author__urls");
  var $authorBtn = $(".author__urls-wrapper button");
  var $authorOriginalParent = $authorUrls.parent();
  var authorTeleported = false;

  function teleportToBody() {
    if (!authorTeleported) {
      $authorUrls.appendTo('body');
      authorTeleported = true;
    }
  }

  function positionAuthorUrls() {
    var btnRect = $authorBtn[0].getBoundingClientRect();
    var vw = window.innerWidth;
    // right-edge distance: aligns dropdown's right edge with button's right edge
    // this is viewport-relative so it can never go off the right side
    var rightFromEdge = vw - btnRect.right;
    // max-width ensures it never overflows left side either
    var maxW = btnRect.right - 10;
    $authorUrls.css({
      position: 'fixed',
      top: (btnRect.bottom + 10) + 'px',
      left: 'auto',
      right: rightFromEdge + 'px',
      'max-width': maxW + 'px',
      'margin-top': '0'
    });
  }

  var DESKTOP_BREAKPOINT = 925;

  function isDesktop() {
    return window.innerWidth >= DESKTOP_BREAKPOINT;
  }

  function returnToSidebar() {
    if (authorTeleported) {
      $authorUrls.appendTo($authorOriginalParent);
      $authorUrls.css({ position: '', top: '', left: '', right: '', 'max-width': '', 'margin-top': '' });
      authorTeleported = false;
    }
  }

  $authorBtn.on("click", function () {
    teleportToBody();
    if ($authorUrls.is(':visible')) {
      $authorUrls.fadeOut("fast");
    } else {
      positionAuthorUrls();
      $authorUrls.fadeIn("fast");
    }
    $authorBtn.toggleClass("open");
  });

  $(window).resize(function () {
    scheduleFooterDockUpdate();

    if (isDesktop() && authorTeleported) {
      // return to sidebar on desktop — CSS handles display:block there
      returnToSidebar();
      $authorUrls.css('display', '');
      $authorBtn.removeClass("open");
    } else if (!isDesktop() && authorTeleported && $authorUrls.is(':visible')) {
      positionAuthorUrls();
    }
  });

  // Only close on outside click when on mobile and teleported
  $(document).on('click', function (e) {
    if (!isDesktop() && authorTeleported &&
      !$(e.target).closest('.author__urls-wrapper, .author__urls').length &&
      window.getSelection().toString() === '') {
      $authorUrls.fadeOut("fast");
      $authorBtn.removeClass("open");
    }
  });

  // Smooth-scroll non-hash links only — hash anchor links (#id) are handled
  // by native browser scroll + scroll-margin-top, so we exclude them to
  // prevent jQuery's stale offsetTop from fighting scrollIntoView.
  $("a:not([href^='#'])").smoothScroll({ offset: -80, speed: 400 });

  // add lightbox class to all image links
  $("a[href$='.avif'],a[href$='.webp'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $(window).on("load", function () {
    scheduleFooterDockUpdate();
  });

  $(window).on("scroll", scheduleFooterDockUpdate);

});
