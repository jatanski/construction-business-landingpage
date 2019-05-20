export default $(document).ready(function() {
  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    cssEase: "linear"
  });
});
