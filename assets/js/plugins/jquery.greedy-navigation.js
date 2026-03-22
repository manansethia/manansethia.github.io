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
  var breaks = [];

  /* Teleport to body so backdrop-filter works in Chrome */
  $hlinks.appendTo('body');

  function positionHlinks() {
    var btnRect = $btn[0].getBoundingClientRect();
    var hlWidth = $hlinks.outerWidth(true);
    $hlinks.css({
      position: 'fixed',
      top: (btnRect.bottom + 15) + 'px',
      left: (btnRect.right - hlWidth) + 'px'
    });
  }

  function updateNav() {
    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

    if ($vlinks.width() > availableSpace) {
      breaks.push($vlinks.width());
      $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);
      if ($btn.hasClass('hidden')) { $btn.removeClass('hidden'); }
    } else {
      if (availableSpace > breaks[breaks.length - 1]) {
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();
      }
      if (breaks.length < 1) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
      }
    }

    $btn.attr('count', breaks.length);

    if ($vlinks.width() > availableSpace && $vlinks.children('*:not(.masthead__menu-item--lg)').length > 0) {
      updateNav();
    }
  }

  $(window).resize(function () {
    updateNav();
    if (!$hlinks.hasClass('hidden')) { positionHlinks(); }
  });

  $btn.on('click', function () {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
    if (!$hlinks.hasClass('hidden')) { positionHlinks(); }
  });

  updateNav();

});