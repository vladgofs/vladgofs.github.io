	$(function() { 
		
		$('#banner').unslider({ 
			autoplay: false,
			keys: true, 
			delay: 15000,
			nav: false,
			arrows: true,
			infinite: true 
		});
		
		$('.content-slide').unslider({
			autoplay: true,
			delay: 20000,
			keys: true,
			nav: false,
			arrows: false,
			infinite: true 
		});




	});


