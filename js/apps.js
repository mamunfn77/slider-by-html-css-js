
$(document).ready(function(){
    
    $(".slider").slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: ".leftArrows",
        nextArrow: ".rightArrows",
        dots: true,
        dotsClass: "slider-dots",
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0px",
    });

  });