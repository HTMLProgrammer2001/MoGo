$(document).ready(
	function(){
		//accordion
		let active_slide = 0,
			slides = $('#accordion > .desc-serv-slide');

		$('#accordion .desc-serv-slide-header').on('click', function(e){
			if(active_slide != -1 && active_slide != slides.index($(this).closest('.desc-serv-slide'))){
				$(slides[active_slide]).find('.toggle').removeClass('fa-angle-up').addClass('fa-angle-down');
				$(slides[active_slide]).find('.desc-serv-slide-content').animate({
					height: 0
				}, 500);
			}

			if(active_slide != slides.index($(this).closest('.desc-serv-slide'))){
				active_slide = slides.index($(this).closest('.desc-serv-slide'));
				$(slides[active_slide]).find('.toggle').removeClass('fa-angle-down').addClass('fa-angle-up');
				$(slides[active_slide]).find('.desc-serv-slide-content').animate({
					height: 140
				}, 500);
			}
		});

		//sliders
		$('.recension-slider').slick({
			dots: false,
			adaptiveHeight: true,
			arrows: true,
			prevArrow: '<div class = "prev-arrow"><i class = "fa fa-angle-left"></i></div>',
			nextArrow: '<div class = "next-arrow"><i class = "fa fa-angle-right"></i></div>',
			cssEasy: 'linear'
		});

		$('#slide').on('click', (e) => {
			$('html, body').animate({
			scrollTop: $(window).height()
		}, 300);
		});

		$('.menu .menu-item').on('click', function(e){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).position().top
			}, 500);

			return false;
		});

		$('.burger').on('click', function(){
			$(this).toggleClass('burger-active');
		});
	}
);