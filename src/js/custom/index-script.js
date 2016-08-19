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
		app.abountCounter();

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
		el.slider();
	};

	app.abountCounter = function(){
		var options = {
			useEasing : true,
			useGrouping : true,
			separator : '',
			decimal : '',
			prefix : '',
			suffix : ''
		};
		var ordersStartCount = document.querySelector('#js-counter-orders').innerText;
		var regStartCount = document.querySelector('#js-counter-reg').innerText;
		var dirStartCount = document.querySelector('#js-counter-dir').innerText;
		var distanceStartCount = document.querySelector('#js-counter-distance').innerText;
		var orders = new CountUp("js-counter-orders", 0, ordersStartCount, 0, 5, options);
		var reg = new CountUp("js-counter-reg", 0, regStartCount, 0, 5, options);
		var dir = new CountUp("js-counter-dir", 0, dirStartCount, 0, 5, options);
		var distance = new CountUp("js-counter-distance", 0, distanceStartCount, 0, 5, options);
		orders.start();
		reg.start();
		dir.start();
		distance.start();
	};

	app.init();

});