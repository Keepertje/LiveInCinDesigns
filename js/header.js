$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('fixed-header');
  }
  else {
      $('.navbar').removeClass('fixed-header');
  }
});
