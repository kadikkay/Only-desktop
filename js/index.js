$(document).ready(function(){
  $(".rate__slider").owlCarousel({
    items: 4,
    margin: 25,
    nav: true,
  });
});

$(document).ready(function(){
  $(".client__slider").owlCarousel({
    items: 4,
    margin: 25,
    nav: true,
    loop: true,
    navText: ["<img src='img/arrow.svg'>", "<img src='img/arrow.svg'>"],
  });
});

$(function () {
  var $videoContainer = $('.studio__iframe'),
    $videoControls = $('.studio__play'),
    $video = $('.studio__video')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});

AOS.init();

$('.step .step__item:not(:first-child)').on({
		mouseover: function(){
			$(this).addClass('active');
			$(this).prevUntil('.step__item:first-child').addClass('active');
		},
		mouseleave: function(){
			$(this).removeClass('active');
			$(this).prevUntil('.step__item:first-child').removeClass('active');
		}
	})

window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.action');
  scroll.classList.toggle('action--active', window.scrollY > 500)
})
