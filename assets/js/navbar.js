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

function navClick(link){
    window.location.href=link;
    var mobileNavElement = document.getElementById("bs-example-navbar-collapse-1");
    mobileNavElement.className="navbar-collapse collapse";
    mobileNavElement.setAttribute("aria-expanded", false);
    
}