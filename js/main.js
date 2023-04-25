$( document ).ready(function() {

  $('.nav-item').on('click', event => {
    $(event.currentTarget).children().next().toggle();
  });
    
  const homeswiper = new Swiper('.home-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const commmentswiper = new Swiper('.commment-swiper', {

    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  const swiper1 = new Swiper(".swiper1", {
    spaceBetween: 10,

    thumbs: {
      swiper: swiper2,
    },
  });

  $(".swiper1 .swiper-slide").zoom();
  
});