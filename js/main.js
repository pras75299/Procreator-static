(function($) {
    'use strict';

    $( window ).load(function() {
        $('.preloader-wrapper').fadeOut();
    });



    /*---------------------------------------
       PORTFOLIO IMAGE LODED WITH MASONRY
    -----------------------------------------*/
    var $PortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded === 'function') {
        imagesLoaded($PortfolioMasonry, function() {
            setTimeout(function() {
                $PortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };

    /*-------------------------------------------
       SET ACTIVE CLASS FOR PORTFOLIO FILTER
    ---------------------------------------------*/
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*--------------------------------
       FILTER JS FOR PORRTFOLIO
    -----------------------------------*/
    $('.portfolio-filter').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $PortfolioMasonry.isotope({ filter: filterValue });
    });
    
    // COMMING SOON COUNTDOWN
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
                '<div class="cdown"><span class="days"><strong>%-D</strong><p>Days</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS</p></span></div>'
            ));
        });
    });


    /*--------------------------------
       VENOBOX GALLARY IMAGE VIEW
    -----------------------------------*/
    $('.venobox').venobox();

    // Mainmenu JS
    jQuery('.mobile-menu-custom').meanmenu();

    /*--------------------------------
        WOW JS
    -----------------------------------*/
    new WOW().init();

    /*----------------------------------
    COUNTUP JS ACTIVE 
    ------------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    /*----------------------------------
    TESTIMONIAL SLIDER
    ------------------------------------*/
    $('.testimonial-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: false
    });
    /*----------------------------------
    SLider Homepage Two
    ------------------------------------*/
    $('.slider-wrapper-two').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'

    });

    /*----------------------------------
    SLider Homepage Three
    ------------------------------------*/
    $('.slider-wrapper-three').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        arrows: false,
        fade: true

    });


    $('.client-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,slidesToScroll: 1}
            }, {
                breakpoint: 320,
                settings: {slidesToShow: 1,slidesToScroll: 1}
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    $('#background-video').YTPlayer({
      videoId: 'C1Fagmq94pw',
      callback: function() {
        console.log("playerFinshed");
      }
    });


    /* parallax Active*/
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

    // ONEPAGENAV NAV

    $('.main-menu').onePageNav();

    // Mainmenu JS
    jQuery('.mobile-menu').meanmenu();

    // HeadRoom JS
    $("#headroom-active").headroom({
        tolerance : 5
    });
    
    /* ---------------------------------------------
        3. Header sticky style.
    --------------------------------------------- */
    $(window).on('scroll', function () {
        var wSize = $(window).width();
        if (wSize > 1 && $(this).scrollTop() > 1) {
            $('#sticky-header').addClass('sticky');
        }
        else {
            $('#sticky-header').removeClass('sticky');
        }
    });
    
    /* ---------------------------------------------
     MENU HAMBURGER AND FULL SCREEN  OVERLAY.
    --------------------------------------------- */
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show')
    });
    $('.menu-button a').on('click', function() {
        $('.overlay').fadeToggle(300);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.overlay').on('click', function() {
        $('.menu-button').fadeToggle(300);
        $('.button a').toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });


    

    //Homepage Three Slider Main Section

      $(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
      });

    $('.search-icon').on('click', function() {
        $('.search-box').fadeToggle('fade');
        $('.search-box').toggleClass('show-box');
    });


    /* ---------------------------------------------
       scrollSpeed Js
    --------------------------------------------- */
    jQuery.scrollSpeed(100, 600);



})(jQuery);
