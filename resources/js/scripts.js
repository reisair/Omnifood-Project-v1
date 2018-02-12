/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    /*---------------------------------------------------------------------*/
    /* Sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px'
    });
    /*---------------------------------------------------------------------*/
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    /*---------------------------------------------------------------------*/
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 700);
    });
    /*---------------------------------------------------------------------*/
    /* Navigation smooth scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /*---------------------------------------------------------------------*/
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    /*---------------------------------------------------------------------*/
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '65%'
    });
    /*---------------------------------------------------------------------*/
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    /*---------------------------------------------------------------------*/
    /* Animations on mouseover */
    $(function () {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd';
        
   
        $('.js--wp-4-hover-1').mouseenter(function () {
            $('.js--wp-4-hover-1').addClass('animated pulse').one(animationEnd, function () {
                $(this).removeClass('animated pulse');
            });
        });
    /*---------------------------------------------------------------------*/
        $('.js--wp-4-hover-2').mouseenter(function () {
            $('.js--wp-4-hover-2').addClass('animated pulse').one(animationEnd, function () {
                $(this).removeClass('animated pulse');
            });
        });
    /*---------------------------------------------------------------------*/
        $('.js--wp-4-hover-3').mouseenter(function () {
            $('.js--wp-4-hover-3').addClass('animated pulse').one(animationEnd, function () {
                $(this).removeClass('animated pulse');
            });
        });
    });
    /*---------------------------------------------------------------------*/
    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    /*---------------------------------------------------------------------*/
    $('.js--attention-shake').waypoint(function (direction) {
        $('.js--attention-shake').addClass('animated shake');
    }, {
        offset: '50%'
    });
    /*---------------------------------------------------------------------*/
    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    /* Google Maps */
    var map = new GMaps({
        div: '.map',
        lat: 65.0123600,
        lng: 25.51,
        zoom: 12
    });
    
    map.addMarker({
        lat: 65.0123600,
        lng: 25.47,
        title: 'Oulu',
        infoWindow: {
            content: '<p><b>Omnifood Oulu Headquarters</b></p>'
        }
    });
});
    /*---------------------------------------------------------------------*/












