window.onload=function(){

    const swiper = new Swiper('#mainbanner', {
        // Optional parameters
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        // If we need pagination
        pagination: {
          el: '#mainbanner .swiper-pagination',
          clickable : true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '#mainbanner .swiper-button-next',
          prevEl: '#mainbanner .swiper-button-prev',
        },

      });
}
