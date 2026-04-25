// Load Swiper from CDN and Initialize
(function() {
  // Check if Swiper is already loaded
  if (typeof Swiper === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.onload = function() {
      initializeProductSwiper();
    };
    document.head.appendChild(script);
  } else {
    initializeProductSwiper();
  }

  function initializeProductSwiper() {
    const swiperContainers = document.querySelectorAll('.product-swiper-wrapper');
    
    swiperContainers.forEach((container) => {
      const swiper = new Swiper(container.querySelector('.swiper'), {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
          dynamicBullets: false,
        },
        navigation: {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
        },
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
        },
        grabCursor: true,
        effect: 'slide',
        speed: 500,
        resistance: true,
        resistanceRatio: 0.85,
        touchRatio: 1,
        touchAngle: 45,
        preventInteractionOnTransition: true,
        freeMode: false,
        centeredSlides: false,
        initialSlide: 0,
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 1,
        },
      });

      // Optional: Add touch feedback
      container.addEventListener('mouseenter', function() {
        swiper.autoplay.stop();
      });

      container.addEventListener('mouseleave', function() {
        swiper.autoplay.start();
      });
    });
  }
})();
