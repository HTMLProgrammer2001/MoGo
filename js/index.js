$(document).ready(
	function(){
		let active_slide = 0,
			slides = $('#accordion > .desc-serv-slide');

		$('#accordion .desc-serv-slide-header').on('click', function(e){
			if(active_slide != -1 && active_slide != slides.index($(this).closest('.desc-serv-slide'))){
				$(slides[active_slide]).find('.toggle').html('&or;');
				$(slides[active_slide]).find('.desc-serv-slide-content').animate({
					height: 0
				}, 500);
			}

			if(active_slide != slides.index($(this).closest('.desc-serv-slide'))){
				active_slide = slides.index($(this).closest('.desc-serv-slide'));
				$(slides[active_slide]).find('.toggle').html('&and;');
				$(slides[active_slide]).find('.desc-serv-slide-content').animate({
					height: 140
				}, 500);
			}
		});
	}
);