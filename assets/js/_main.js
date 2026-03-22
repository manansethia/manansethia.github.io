/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

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

  // init smooth scroll — 800ms with eased curve for silky feel
  $("a").smoothScroll({ offset: -80, speed: 800 });

  // add lightbox class to all image links
  $("a[href$='.webp'],a[href$='.webp'],a[href$='.webp'],a[href$='.webp'],a[href$='.gif']").addClass("image-popup");

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