$(document).ready(function(){
  $(".invest-carousel").owlCarousel({
    items: 5,
    margin: 20,
    stagePadding: 30,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
      },
      476: {
        items: 1,
        stagePadding: 100,
      },
      768: {
        items: 2,
        stagePadding: 100,
      },
      992: {
        items: 3,
        stagePadding: 50,
      },
      1200: {
        items: 4,
        stagePadding: 60,
      },
      1440: {
        items: 5,
      }
    }
  });

  $(".best-carousel").owlCarousel({
    items: 5,
    margin: 20,
    stagePadding: 30,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      400: {
        items: 2,
        margin: 10,
        stagePadding: 15,
      },
      476: {
        items: 2,
        stagePadding: 50,
      },
      768: {
        items: 3,
        stagePadding: 50,
      },
      992: {
        items: 4,
        stagePadding: 50,
      },
      1200: {
        items: 5,
        stagePadding: 40,
      }
    }
  });
});