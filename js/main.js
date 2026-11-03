/* Pattern category filter (flicker-free class toggle) */
$(document).ready(function () {
  $('.filter-pill').on('click', function () {
    var filter = $(this).data('filter');
    $('.filter-pill').removeClass('active');
    $(this).addClass('active');

    $('.image-gallery .image-item').each(function () {
      var matches = filter === 'all' || $(this).data('category') === filter;
      $(this).toggleClass('is-hidden', !matches);
    });
  });
});

/* Cookie consent & analytics */
(function () {
  function loadHeap() {
    window.heap = window.heap || [];
    heap.load = function (e, t) {
      window.heap.appid = e;
      window.heap.config = t = t || {};
      var r = document.createElement("script");
      r.type = "text/javascript";
      r.async = !0;
      r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js";
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(r, a);
      for (
        var n = function (e) {
            return function () {
              heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          },
          p = [
            "addEventProperties",
            "addUserProperties",
            "clearEventProperties",
            "identify",
            "resetIdentity",
            "removeEventProperty",
            "setEventProperties",
            "track",
            "unsetEventProperty"
          ],
          o = 0;
        o < p.length;
        o++
      )
        heap[p[o]] = n(p[o]);
    };
    heap.load("494472926");
  }

  $(window).on('load', function () {
    if (!localStorage.getItem('cookieconsent')) {
      var banner = document.createElement('div');
      banner.className = 'cookieconsent';
      banner.innerHTML =
        '<span>This site uses cookies to improve your browsing experience.</span>' +
        '<a href="#">Got it!</a>';
      document.body.appendChild(banner);

      banner.querySelector('a').onclick = function (e) {
        e.preventDefault();
        banner.style.display = 'none';
        localStorage.setItem('cookieconsent', true);
        loadHeap();
      };
    } else {
      loadHeap();
    }
  });
})();
