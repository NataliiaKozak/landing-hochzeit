(function () {
  function initGallerySingle() {
    var sections = document.querySelectorAll('.gallery');
    if (!sections.length) return;

    sections.forEach(function (gallerySection) {
      var slides = gallerySection.querySelectorAll('.swiper-slide');
      if (!slides.length) return;

      var prevBtn = gallerySection.querySelector('.swiper-button-prev');
      var nextBtn = gallerySection.querySelector('.swiper-button-next');

      var currentIndex = 0;

      function show(index) {
        // всегда только 1 видимый слайд
        slides.forEach(function (slide, i) {
          slide.hidden = i !== index;
        });
        currentIndex = index;
      }

      function prev() {
        var nextIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        show(nextIndex);
      }

      function next() {
        var nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        show(nextIndex);
      }

      // init
      show(0);

      // arrows
      if (prevBtn) prevBtn.addEventListener('click', prev);
      if (nextBtn) nextBtn.addEventListener('click', next);

      // swipe
      var swipeArea = gallerySection.querySelector('.gallery-swiper');
      if (!swipeArea) return;

      var startX = 0;

      swipeArea.addEventListener(
        'touchstart',
        function (e) {
          startX = e.touches[0].clientX;
        },
        { passive: true },
      );

      swipeArea.addEventListener(
        'touchend',
        function (e) {
          var endX = e.changedTouches[0].clientX;
          var diff = startX - endX;

          if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
          }
        },
        { passive: true },
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallerySingle);
  } else {
    initGallerySingle();
  }
})();



// из моего проект 1 - беременые и нворожденные - 2 свайпера
// (function () {
//   function initGallerySwiper() {
//     var gallerySection = document.querySelector('.gallery');
//     if (!gallerySection) return;

//     var swiperEl = gallerySection.querySelector('.gallery-swiper');
//     if (!swiperEl) return;

//     if (typeof Swiper === 'undefined') return;

//     var swiperConfig = {
//       slidesPerView: 1,
//       spaceBetween: 15,
//       loop: true,
//       pagination: {
//         el: gallerySection.querySelector('.swiper-pagination'),
//         clickable: true,
//       },
//       navigation: {
//         nextEl: gallerySection.querySelector('.swiper-button-next'),
//         prevEl: gallerySection.querySelector('.swiper-button-prev'),
//       },
//       grabCursor: true,
//       breakpoints: {
//         576: { slidesPerView: 2, spaceBetween: 15 },
//         768: { slidesPerView: 2, spaceBetween: 20 },
//         992: { slidesPerView: 3, spaceBetween: 20 },
//       },
//     };

//     new Swiper(swiperEl, swiperConfig);
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initGallerySwiper);
//   } else {
//     initGallerySwiper();
//   }
// })();

// (function () {
//   function initServicesSwiper() {
//     var section = document.querySelector('.services');
//     if (!section) return;

//     var swiperEl = section.querySelector('.services-swiper');
//     if (!swiperEl) return;

//     if (typeof Swiper === 'undefined') return;

//     new Swiper(swiperEl, {
//       slidesPerView: 1,
//       spaceBetween: 15,
//       loop: true,
//       pagination: {
//         el: section.querySelector('.services-pagination'),
//         clickable: true,
//       },
//       navigation: {
//         nextEl: section.querySelector('.services-button-next'),
//         prevEl: section.querySelector('.services-button-prev'),
//       },
//       grabCursor: true,
//       breakpoints: {
//         576: { slidesPerView: 2, spaceBetween: 15 },
//         768: { slidesPerView: 2, spaceBetween: 20 },
//         992: { slidesPerView: 3, spaceBetween: 20 },
//       },
//     });
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initServicesSwiper);
//   } else {
//     initServicesSwiper();
//   }
// })();
