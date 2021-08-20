'use strict'

$(document).ready(function() {

/* Service (Mobile) */
  if($(window).width() > 1023) {
    $('.service__links-wrap').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }
  else {
    $('.service__links-wrap').owlCarousel({
      nav: false,
      loop: true,
      dots: false,
      margin: 65,
      responsive : {
        0 : {
          items: 2
        },
        768 : {
          items: 3
        }
      }
    });
  }

  if($(window).width() < 1023) {
    $('.worth__carousel').owlCarousel({
      nav: false,
      loop: true,
      dots: true,
      margin: 0,
      responsive : {
        0 : {
          items: 1
        },
        768 : {
          items: 1
        }
      }
    });

  }
  else {
    $('.worth__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    // $('.cer__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }

  $('.cer__carousel').owlCarousel({
    nav: false,
    loop: true,
    dots: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    responsive : {
      0 : {
        items: 1
      },
      768 : {
        items: 2
      },
      1024 : {
        items: 3
      },
      1366 : {
        items: 5
      }
    }
  });

  /*$(".slider__nav-btn--next").click(function () {
    $(".slider__owl").trigger("next.owl.carousel");
  });
  $(".slider__nav-btn--prev").click(function () {
    $(".slider__owl").trigger("prev.owl.carousel");
  });*/

  $('.nav-pills .nav-link.active, .nav-pills .show > .nav-link').click(function () {
    $('.solution__btn').addClass('open');
  });

  $('.solution__btn[aria-selected="false"]').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".solution__content").offset().top
    }, 1000);
  });

  if ($(window).width() < 767) {
    $('.footer__social').insertAfter('.footer__col-contact-item_time');
  }

  if ($(window).width() < 1023) {
    /*$('.map__route').insertAfter('.map__frame');*/
    $('.other__center').insertAfter('.other__wrap');
  }


  $(".header__menu").click(function() {
    $(this).toggleClass("open");
    $("main").toggleClass("open");
    $(".header").toggleClass("open");
    $('.alt-logo').toggleClass("open");
    $('.logo-bas').toggleClass("open");
    $("footer").addClass("open");
    $('.menu').toggleClass('open');
  });

  $(".service__menu-btn").click(function() {
    $("main").toggleClass("open");
    $(".header").toggleClass("open");
    $('.alt-logo').toggleClass("open");
    $('.logo-bas').toggleClass("open");
    $('.menu').toggleClass('open');
    $('.header__menu').toggleClass('open');
    $("footer").addClass("open");
  });

  $('.menu__close').click(function () {
    $(".header").removeClass("open");
    $('.alt-logo').removeClass("open");
    $('.logo-bas').removeClass("open");
    $('.menu').removeClass('open');
    $('footer').removeClass('open');
    $('main').removeClass('open');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.service__menu').addClass('fixed');
      $('.header_inner').addClass('hidden');
    }
    else {
      $('.service__menu').removeClass('fixed');
      $('.header_inner').removeClass('hidden');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $('.consulting__aside').addClass('visible');
    }
    else {
      $('.consulting__aside').removeClass('visible');
    }
  });

  /* Плавный скролл до якоря */
  $(function(){
    $("a[href^='#']").click(function() {
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });

  /*$('.menu__content-form-input').focus(function() {
    let labelFocus = $(this).nextAll("label");
    if ($(this).val() != '' && $(this).blur()) {
      labelFocus.css('display', 'none');
    } else {
      labelFocus.css('display', 'block');
    }
  })*/


$('.menu__content-item').hover(function () {
  $('.menu__content-middle').addClass('visible');
})


 $('.requisites__btn').click( function () {
   $(this).html('Скопировано');
 })

  $('.consulting__aside-link').click(function (e) {
    $('.consulting__aside-link').removeClass('active');
    $(this).addClass('active');
  });


  /* Блок на всю высоту видимой области - альтернатива для vh, но с поддержкой старых браузеров  > IE 11 */
  /*function setHeiHeight() {
    $('.banner').css({
      height: $(window).height() + 'px'
    });
  }
  setHeiHeight();
  $(window).resize( setHeiHeight );*/


});
