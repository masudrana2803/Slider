$('.lion-slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-arrow-left myArrow pr"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right myArrow nx"></i>',
});
			


$('.lion-slide1').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
});


$('.lion-slide2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:false,
});