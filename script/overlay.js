$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      const overlay = document.getElementById('overlay');
      overlay.classList.add('overlay--hidden');
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 0);

      function disableScroll(event) {
        event.preventDefault();
      }
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });

      window.addEventListener('DOMContentLoaded', function () {
        var video_elements = document.querySelectorAll("video");
        for (var i = 0; i < video_elements.length; i++) {
          const overlay = document.getElementById('overlay');
          const overlay_movie = document.getElementById('overlay_movie');
          overlay_movie.muted = true;
          window.setTimeout(function () {
            overlay.classList.add('overlay--invisible');
          }, 5000);
          window.setTimeout(function () {
            document.removeEventListener('touchmove', disableScroll, { passive: false });
            document.removeEventListener('mousewheel', disableScroll, { passive: false });
          }, 5500);
          window.setTimeout(function () {
            overlay.classList.add('overlay--hidden');
          }, 6000);
          // 遅延読み込み
          video_elements[i].src = video_elements[i].getAttribute("data-src");
        }
      });
    }
  }
  webStorage();
});