$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('fixed-header');
  }
  else {
      $('.navbar').removeClass('fixed-header');
  }
});

(function($){
  $(window).on('load', function(){
      $.instagramFeed({
          'username': 'liveincin_designs',
          'container': ".insta-feed",
          'display_profile': false,
          'display_biography': false,
          'display_gallery': true,
          'callback': null,
          'styling': true,
          'items': 4,
          'items_per_row': 4,
          'margin': 1,
          'lazy_load': true,
          'on_error': console.error
      });
  });
})(jQuery);
