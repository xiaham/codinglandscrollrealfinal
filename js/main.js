$(document).ready(function(){
  $('.bxslider').bxSlider({
	  speed: 350,
	  pager: false,
	  nextSelector: '#slider-next',
	  nextText: ''
	});
});


/* Fix the rotation bug on iphoneipad */
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}