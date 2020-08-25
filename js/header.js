$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('fixed-header');
  }
  else {
      $('.navbar').removeClass('fixed-header');
  }
});

function myFunction(elmnt) {
  console.log('heelp!', elmnt);
  if($('.'+elmnt).hasClass('flip')){
    $('.'+elmnt).removeClass('flip');
  } else{  $('.'+elmnt).addClass('flip');}
}

var inputElements = document.querySelectorAll(".image-item");
