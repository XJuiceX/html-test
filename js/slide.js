$(document).ready(function(){
  $('.slider').slick({
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        } 
      ]
  });
});


          


