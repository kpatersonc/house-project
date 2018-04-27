"use strict";


jQuery(document).ready(function ($) {
    updateNavbarMargin();
    $(window).resize(function() {
        updateNavbarMargin();
      });
});

function updateNavbarMargin() {
    var logoHeight = $('#bs-example-navbar-collapse-1').height();
    var negativeHeight = -Math.abs(logoHeight)
    $('.logo').css("margin-bottom", negativeHeight);
}
