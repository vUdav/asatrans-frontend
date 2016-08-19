$(document).ready(function() {

	app.init = function(){
		app.promoSlider(); // промо каруселька
	};

	app.promoSlider = function(){
		var el = $('.js-promo-slider');
		el.owlCarousel({
			items: 1,
			nav: false,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000
		});
	};

	app.init();

});