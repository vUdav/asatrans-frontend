//= ../vendor/countUp.js
//= ../vendor/owl.carousel.js
//= ../vendor/moment.js
//= ../vendor/bootstrap-datetimepicker.js
//= ../vendor/bootstrap-slider.js

$(document).ready(function() {

	app.init = function(){
		app.promoSlider(); // промо каруселька
		// app.feedbackDatepicker(); // дейтпикер
		app.feedbackRange();
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

	app.feedbackDatepicker = function(){
		var el = $('.js-datepicker');
		el.datetimepicker();
	};

	app.feedbackRange = function(){
		var el = $(".js-feedback-range");
		el.slider({});
	};

	app.init();

});