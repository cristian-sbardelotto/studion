$(document).ready(() => {
  const slickOptions = {
    dots: false,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slider__prev-next">Next</button>'
  };

  $('.slider').slick(slickOptions);
});