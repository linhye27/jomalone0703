
$(function(){
 $(".bar").click(function(){
   $("nav").stop(true).fadeIn("fast");
 });
 $("nav i:first-child").click(function(){
   $("nav").stop(true).fadeOut("fast");
 })
    
$('.slide').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      
///
});