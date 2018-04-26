"use strict";


jQuery(document).ready(function ($) {


	/*---------------------------------------------*
     * Preloader
     ---------------------------------------------*/

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    // Home backgroundImage 
	
	  $("#home .bgimg").hide();
	  rotateBackgroundImages();	
	  //changeImage();  
		function rotateBackgroundImages() {
		  $("#home .bgimg").first().insertBefore("#home .overlay").fadeOut(5000);
		  $("#home .bgimg").first().fadeIn(5000);
		  setTimeout(rotateBackgroundImages, 7000);
		}  

    /*---------------------------------------------*
     * Isotop for portfolio
     ---------------------------------------------*/

    $(function () {
        // init Isotope
        var $grid = $('.portfolio-one').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.filters-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

    });

    /*---------------------------------------------*
     * Scroll Up
     ---------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    /*---------------------------------------------*
     * Menu Background Change
     ---------------------------------------------*/

    var windowWidth = $(window).width();
    if (windowWidth > 757) {



        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.navbar').fadeIn(300);
                $('.navbar').addClass('menu-bg');

            } else {

                $('.navbar').removeClass('menu-bg');
            }
        });

    }
    $('#bs-example-navbar-collapse-1').localScroll();




    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();

    /*---------------------------------------------*
     * Gallery Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

    //    $('.statistic-counter').counterUp({
    //        delay: 10,
    //        time: 2000
    //    });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    //        var wow = new WOW({
    //            mobile: false // trigger animations on mobile devices (default is true)
    //        });
    //        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.brand-category').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            // breakpoint from 480 up
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 1
            },
            980: {
                items: 1
            }
        }

    });
    $("#success-alert").hide();
    //End

    //Set carousel for mobiles on load
    if ((/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('.mobile-carousel-images').owlCarousel({
            responsiveClass: true,
            autoplay: false,
            items: 1,
            loop: true,
            dots: true,
            autoplayHoverPause: true,
            responsive: {
                // breakpoint from 0 up
                // breakpoint from 480 up
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 1
                },
                980: {
                    items: 1
                }
            }

        });
    }

    // Featured Listings Carousel
    $('.listing-items').slick({
        infinite: true,
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    updateNavbarMargin();
    $(window).resize(function() {
        updateNavbarMargin();
      });
});

function updateNavbarMargin() {
    var logoHeight = $('#bs-example-navbar-collapse-1').height(); // 50px is the min height for the navbar + 15px padding
    var negativeHeight = -Math.abs(logoHeight)
    $('.logo').css("margin-bottom", negativeHeight);
}

var contactForm = $("form#contact-form");
contactForm.submit(function (event) {
    event.preventDefault();

    var service_id = "default_service";
    var template_id = "ask_us_anything";
    var templateParams = {
        from_name: contactForm.find('input[id="from_name"]').val(),
        user_email: contactForm.find('input[id="user_email"]').val(),
        user_phone: contactForm.find('input[id="user_phone"]').val(),
        user_comment: contactForm.find('textarea[id="user_comment"]').val()
    }
    contactForm.find("button").text("Sending...");
    emailjs.send(service_id, template_id, templateParams)
        .then(function () {
            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            });
            contactForm.find('input[id="from_name"]').val('');
            contactForm.find('input[id="user_email"]').val('');
            contactForm.find('input[id="user_phone"]').val('');
            contactForm.find('textarea[id="user_comment"]').val('');
            contactForm.find("button").text("Send Email");
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            contactForm.find("button").text("Send Email");
        });
    return false;
});

//Close mobile nav bar on selection
function navClick(link){
    window.location.href=link;
    var mobileNavElement = document.getElementById("bs-example-navbar-collapse-1");
    mobileNavElement.className="navbar-collapse collapse";
    mobileNavElement.setAttribute("aria-expanded", false);
    
}



