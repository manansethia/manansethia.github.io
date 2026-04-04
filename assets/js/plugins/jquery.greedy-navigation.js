/*
* Greedy Navigation
* http://codepen.io/lukejacksonn/pen/PwmwWV
* Modified: teleport .hidden-links to body for cross-browser backdrop-filter
*/

$(document).ready(function () {

  var $nav = $('#site-nav');
  var $btn = $('#site-nav button');
  var $vlinks = $('#site-nav .visible-links');
  var $hlinks = $('#site-nav .hidden-links');
  var resizeFrame = null;
  var movableSelector = '*:not(.masthead__menu-item--lg)';

  /* Teleport to body so backdrop-filter works in Chrome */
  $hlinks.appendTo('body');

  function positionHlinks() {
    var btnRect = $btn[0].getBoundingClientRect();
    var hlWidth = $hlinks.outerWidth(true);
    var left = Math.max(10, btnRect.right - hlWidth);
    $hlinks.css({
      position: 'fixed',
      top: (btnRect.bottom + 15) + 'px',
      left: left + 'px',
      right: 'auto',
      'max-width': 'calc(100vw - 20px)'
    });
  }

  function closeHlinks() {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  }

  function navWidth() {
    return Math.floor($nav[0].getBoundingClientRect().width);
  }

  function buttonWidth() {
    return $btn.outerWidth(true) || 0;
  }

  function visibleWidth() {
    return Math.ceil($vlinks[0].scrollWidth);
  }

  function availableSpace(includeButton) {
    return navWidth() - (includeButton ? buttonWidth() + 30 : 0);
  }

  function updateNav() {
    $hlinks.children().appendTo($vlinks);
    $btn.addClass('hidden');
    closeHlinks();

    if (visibleWidth() <= availableSpace(false)) {
      $btn.attr('count', 0);
      return;
    }

    $btn.removeClass('hidden');

    while (visibleWidth() > availableSpace(true) && $vlinks.children(movableSelector).length > 0) {
      $vlinks.children(movableSelector).last().prependTo($hlinks);
    }

    if ($hlinks.children().length < 1) {
      $btn.addClass('hidden');
      closeHlinks();
    }

    $btn.attr('count', $hlinks.children().length);
  }

  function scheduleUpdateNav() {
    if (resizeFrame) {
      window.cancelAnimationFrame(resizeFrame);
    }

    resizeFrame = window.requestAnimationFrame(function () {
      resizeFrame = null;
      updateNav();
      if (!$hlinks.hasClass('hidden')) {
        positionHlinks();
      }
    });
  }

  $(window).on('resize orientationchange', function () {
    scheduleUpdateNav();
  });

  $(window).on('load', function () {
    scheduleUpdateNav();
  });

  $btn.on('click', function () {
    if ($btn.hasClass('hidden') || $hlinks.children().length < 1) {
      return;
    }

    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
    if (!$hlinks.hasClass('hidden')) { positionHlinks(); }
  });

  updateNav();

});
