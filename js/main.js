$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('.navbar').addClass('fixed-header');
  }
  else {
    $('.navbar').removeClass('fixed-header');
  }
});

(function ($) {
  $(window).on('load', function () {
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


/* cookie crap*/
(function () {
  if (!localStorage.getItem('cookieconsent')) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(request.responseText);
        var eu_country_codes = ['AL', 'AD', 'AM', 'AT', 'BY', 'BE', 'BA', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FO', 'FI', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NO', 'NL', 'PO', 'PT', 'RO', 'RU', 'SE', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA'];
        if (eu_country_codes.indexOf(data.countryCode) != -1) {
          document.body.innerHTML += '\
					<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">\
						This site uses cookies. By continuing to use this website, you agree to their use. \
						<a href="#" style="color:#CCCCCC;">I Understand</a>\
					</div>\
					';
          document.querySelector('.cookieconsent a').onclick = function (e) {
            e.preventDefault();
            document.querySelector('.cookieconsent').style.display = 'none';
            localStorage.setItem('cookieconsent', true);
            window.heap = window.heap || [], heap.load = function (e, t) { window.heap.appid = e, window.heap.config = t = t || {}; var r = document.createElement("script"); r.type = "text/javascript", r.async = !0, r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(r, a); for (var n = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], o = 0; o < p.length; o++)heap[p[o]] = n(p[o]) };
            heap.load("494472926");
          };
        }
      }
    };
    request.open('GET', 'http://ip-api.com/json', true);
    request.send();
  } else { //already consented
    window.heap = window.heap || [], heap.load = function (e, t) { window.heap.appid = e, window.heap.config = t = t || {}; var r = document.createElement("script"); r.type = "text/javascript", r.async = !0, r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(r, a); for (var n = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], o = 0; o < p.length; o++)heap[p[o]] = n(p[o]) };
    heap.load("494472926");
  }
})();