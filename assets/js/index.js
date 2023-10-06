// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
  spaceBetween: 100,

      // Optional: Add configuration options here
      loop: true, // Enable infinite loop
      pagination: {
        el: '.swiper-pagination', // Pagination container
      },
      navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
      },
    });
  });
  