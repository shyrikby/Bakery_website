$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  });
});

var owl = $(".owl-theme");
owl.owlCarousel({
  items: 1,
  nav: true, // Show next and prev buttons
  navText: ["👈", "👉"], //text  
});
