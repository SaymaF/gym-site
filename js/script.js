$(function () {
  'use strict'
  // Banner slider Start

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 1000,
  });

  //Banner Slider End

  //About Video palyer start

  $('.venobox').venobox({
    spinner: 'cube-grid',
    spinColor: '#e23e38'
  });

  //About Video player End

  //team slider
  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      }
    ]
  });



  // Testimonial slider Start

  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      }
    ]
  });
  // Testimonial slider End

  // Counter Start
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  // Counter End

  $('.logo_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [{
        breakpoint: 1223,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<i class="fas fa-chevron-circle-left logo_prev"></i>',
          nextArrow: '<i class="fas fa-chevron-circle-right logo_next"></i>',
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        }
      }
    ]
  });



  $('.button_scroll').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 2000);
  });

  $(window).scroll(function () {
    var buttonscroll = $(this).scrollTop();

    if (buttonscroll > 150) {
      $('.button_scroll').fadeIn();
    } else {
      $('.button_scroll').fadeOut();
    }
  });

});