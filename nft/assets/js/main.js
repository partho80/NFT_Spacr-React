/* =================================================================================

    Template Name: NFTSpace - NFT Create & Sell HTML 5 Template 
    Description: This a NFT buy and sell HTML 5 template based bootstrap 5.
    Author: LuminousLabs
    Author URI:  https://themeforest.net/user/luminouslabs
    Version: 1.0.0

=================================================================================== */
(function ($) {
    "use strict";
    $(document).on("ready", function () {
        // PRELOADER
        $(window).on('load', function () {
            $('.preloader').addClass('loaded')
            $('.preloader').delay(600).fadeOut()
          })
        // SCROLL TO TOP
        AOS.init({
            duration: 800,
        });
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).scroll(updateProgress);

        var offset = 50;
        var duration = 550;

        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });

        jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });

        // MOBILE MENU
        $("#hamburger").on("click", function () {
            $(".mobile-nav").addClass("show");
            $(".overlay").addClass("active");
        });
        $(".close-nav").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });
        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            // $(".overlay").removeClass("active");
        });
        $("#mobile-menu").metisMenu();

        // COUNTER UP
        $(".counter-up").counterUp({
            time: 1000,
        });

        // HERO SLIDER
        function mainSlider() {
            var BasicSlider = $(".hero-slider-wrapper");
            BasicSlider.on("init", function (e, slick) {
                var $firstAnimatingElements = $(".single-slider:first-child").find(
                    "[data-animation]"
                );
                doAnimations($firstAnimatingElements);
            });

            BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $(
                    '.single-slider[data-slick-index="' + nextSlide + '"]'
                ).find("[data-animation]");
                doAnimations($animatingElements);
            });

            BasicSlider.slick({
                autoplay: true,
                autoplaySpeed: 7000,
                dots: true,
                fade: true,
                arrows: false,
                prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
                pauseOnHover: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            dots: true,
                            arrows: false,
                        },
                    },
                ],
            });

            function doAnimations(elements) {
                var animationEndEvents =
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data("delay");
                    var $animationType = "animated " + $this.data("animation");
                    $this.css({
                        "animation-delay": $animationDelay,
                        "-webkit-animation-delay": $animationDelay,
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
        }
        mainSlider();

        // NEW ITEMS SLIDER
        const owlPrevBtn = '<i class="fal fa-chevron-left"></i>';
        const owlNextBtn = '<i class="fal fa-chevron-right"></i>';
        $(".new-items-slider-wrapper").owlCarousel({
            center: false,
            margin: 15,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: false,
            items: 4,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            // navContainer: ".items-slider-nav-wrapper .new-items-slider-nav",
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                991: {
                    items: 3,
                },
                1199: {
                    items: 4,
                    nav: true,
                },
            },
        });

        // ARTIST SLIDER
        $(".artist-slider").owlCarousel({
            margin: 15,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: false,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            // navContainer: ".items-slider-nav-wrapper .new-items-slider-nav",
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    center: true,
                },
                470: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                991: {
                    items: 6,
                    nav: true,
                },
            },
        });

        // TABS
        $(".author-items-tab").skeletabs({
            breakpoint: false,
        });

        $(".item-preview-tab").skeletabs({
            breakpoint: false,
        });

        $(".activity-filter-tab").skeletabs({
            breakpoint: false,
        });

        // SELECT
        $("select").niceSelect();

        // SEARCH BOX TOGGLE
        $("#search-icon").on('click', function (event) {
            !$('.header-search-box').has(event.target).length &&  $('.header-search-box').toggleClass('show')
        });

        // FOLLOW BUTTON
        $(".follow-btn").on('click', function () {
            $(this).toggleClass("followed");
        });

        // LIKE BUTTON
        $(".card-like").on('click',function () {
            $(this).toggleClass("liked");
        });

        // STICKY HEADER
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 150) {
                $(".header-wrapper").addClass("sticky");
            } else {
                $(".header-wrapper").removeClass("sticky");
            }
        });

        // // AUCTION COUTNDOWN
        $(".auction-countdown.one").length>0 && $(".auction-countdown.one").countdown("2022/09/05", function (event) {
            $(this).html(
                event.strftime(
                    "<div class='single-count'>%D :&nbsp</div> <div class='single-count'> %H :&nbsp</div> <div class='single-count'>%M :&nbsp</div>  <div class='single-count'> %S</div>"
                )
            );
        });
        $(".auction-countdown.two").length>0 &&  $(".auction-countdown.two").countdown("2022/12/05", function (event) {
            $(this).html(
                event.strftime(
                    "<div class='single-count'>%D :&nbsp</div> <div class='single-count'> %H :&nbsp</div> <div class='single-count'>%M :&nbsp</div>  <div class='single-count'> %S</div>"
                )
            );
        });
        $(".auction-countdown.three").length>0 && $(".auction-countdown.three").countdown("2023/09/05", function (event) {
            $(this).html(
                event.strftime(
                    "<div class='single-count'>%D :&nbsp</div> <div class='single-count'> %H :&nbsp</div> <div class='single-count'>%M :&nbsp</div>  <div class='single-count'> %S</div>"
                )
            );
        });
        $(".auction-countdown.four").length>0 && $(".auction-countdown.four").countdown("2023/09/05", function (event) {
            $(this).html(
                event.strftime(
                    "<div class='single-count'>%D :&nbsp</div> <div class='single-count'> %H :&nbsp</div> <div class='single-count'>%M :&nbsp</div>  <div class='single-count'> %S</div>"
                )
            );
        });

       
         // TYPING EFFECT
         const typed = $('.typed');
         typed.length >0 && new Typed('.typed', {
            strings: ['Awesome', 'Unique', 'Outstanding'],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            smartBackspace: true,
            cursorChar: '',
        });

        // Home notification toggle
        $('#notification-btn').on('click',function(event){
             !$('.activity-wrapper').has(event.target).length &&  $('.activity-wrapper').toggleClass('show')
        })

        //custom cursor
        $(document).mousemove(function(event){
            let elem = $('.mouse-cursor')
            
            let mousex = event.clientX - 7;
            let mousey = event.clientY - 15;
            
            elem.css({
                "left": mousex + 'px',
                "top": mousey + 'px'
            })
        })
        
         $(document).on('click', function(event){
            // for searchbar
            const searchIcon = $("#search-icon");
            if(searchIcon !== event.target  &&  !searchIcon.has(event.target).length){
                $(".header-search-box").removeClass('show')
            }   
          
            
            //for notification menu
            const notificationIcon = $("#notification-btn");
            if(notificationIcon !== event.target  &&  !notificationIcon.has(event.target).length){
                $('.activity-wrapper').removeClass('show')
            }    
        })

        // Load more items
        $(".explore-item").slice(0, 8).show();
        $(".load-more-button button").on("click", function(e){
          e.preventDefault();
          $(".explore-item:hidden").slice(0, 4).slideDown();
          if($(".explore-item:hidden").length == 0) { 
            $("explore-items-wrapper .load-more-button").css("display", "none");
          }
        });

        $(".blog-item").slice(0, 6).show();
        $(".load-more-button button").on("click", function(e){
          e.preventDefault();
          $(".blog-item:hidden").slice(0, 3).slideDown();
          if($(".blog-item:hidden").length == 0) { 
            $(".load-more-button").css("display", "none");
          }
        });






         /*---------------------
     Contact Form
    --------------------- */
    if ($('body').find('.contact-form').length !== 0) {
        // Form 1
        $('.cf-msg').hide();
        $('form#cf button#submit').on('click', function () {
    
          var firstName = $('#firstName').val();
          var email = $('#email').val();
          var subjectName = $('#subjectName').val();
          var msg = $('#msg').val();
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
          if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
          }
    
          firstName = $.trim(firstName);
          subjectName = $.trim(subjectName);
          email = $.trim(email);
          msg = $.trim(msg);
    
        //   if (firstName != '' && email != '' && msg != '') {
        //     var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        //     $.ajax({
        //       type: "POST",
        //       url: "assets/php/mail.php",
        //       data: values,
        //       success: function () {
        //         $('#firstName').val('');
        //         $('#subjectName').val('');
        //         $('#email').val('');
        //         $('#msg').val('');
    
        //         $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
        //         setTimeout(function () {
        //           $('.cf-msg').fadeOut('slow');
        //         }, 4000);
        //       }
        //     });
        //   } else {
        //     $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        //   }

        $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
          return false;
        });
    
      }

    }); // end document ready function










   




})(jQuery); // End jQuery
