$( document ).ready(function() {
    new WOW().init();
    // Adding smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]',{
      speed: 500,
      Linear: true
    });
  });