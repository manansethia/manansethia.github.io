/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // FitVids init
  fitvids();

  /* ── Footer positioning ──
     Handled entirely by CSS sticky-footer pattern:
       body { display: flex; flex-direction: column; min-height: 100vh; }
       .page__footer { margin-top: auto; }
     Browser updates flex layout each frame during content height
     transitions (collapsibles, PDFs), so no JS push / rAF pump / RO is
     needed. window.smoothFooterPush is kept as a no-op stub for
     backward compatibility with existing callers in cv.md, projects.md,
     achievements.md (they all guard with `if (window.smoothFooterPush)`,
     so the function existing-and-doing-nothing keeps them safe). */
  window.smoothFooterPush = function () { /* no-op — CSS handles it */ };

  // Follow menu drop down — teleport to body for Chrome backdrop-filter support
  var $authorUrls = $(".author__urls");
  var $authorBtn = $(".author__urls-wrapper button");
  var $authorOriginalParent = $authorUrls.parent();
  var authorTeleported = false;
  var authorScrollClosing = false;

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

    // Keep the pointer attached to the Connect button when the panel is
    // clamped against either viewport edge.
    var menuRect = $authorUrls[0].getBoundingClientRect();
    if (menuRect.width) {
      var arrowLeft = (btnRect.left + btnRect.width / 2) - menuRect.left;
      arrowLeft = Math.max(16, Math.min(menuRect.width - 16, arrowLeft));
      $authorUrls[0].style.setProperty('--author-arrow-left', arrowLeft + 'px');
    }
  }

  var DESKTOP_BREAKPOINT = 925;

  function isDesktop() {
    return window.innerWidth >= DESKTOP_BREAKPOINT;
  }

  function returnToSidebar() {
    if (authorTeleported) {
      $authorUrls.appendTo($authorOriginalParent);
      $authorUrls.css({ position: '', top: '', left: '', right: '', 'max-width': '', 'margin-top': '' });
      $authorUrls[0].style.removeProperty('--author-arrow-left');
      authorTeleported = false;
    }
  }

  $authorBtn.on("click", function () {
    teleportToBody();
    authorScrollClosing = false;
    if ($authorUrls.is(':visible')) {
      $authorUrls.stop(true, true).fadeOut("fast");
      $authorBtn.removeClass("open");
    } else {
      positionAuthorUrls();
      $authorUrls.stop(true, true).fadeIn("fast");
      requestAnimationFrame(positionAuthorUrls);
      $authorBtn.addClass("open");
    }
  });

  // Close immediately when scrolling so the fixed popup never trails the page.
  window.addEventListener('scroll', function () {
    if (!isDesktop() && authorTeleported && $authorUrls.is(':visible') && !authorScrollClosing) {
      authorScrollClosing = true;
      $authorUrls.stop(true, false).fadeOut("fast", function () {
        authorScrollClosing = false;
      });
      $authorBtn.removeClass("open");
    }
  }, { passive: true });

  $(window).resize(function () {
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

});
