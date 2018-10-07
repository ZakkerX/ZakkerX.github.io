$(function() {

	$('#my-menu').mmenu({
		"counters": true,
		extensions: [
			"multiline",
			'theme-black', 
			'effect-menu-slide',
			"position-back",
			"position-right",
			"pagedim-black",
			"fx-menu-fade",
			"fx-listitems-fade",

		],
		navbar: {
			title: '<img src="img/logo.svg" alt="logo салона красоты Смитлер">'
		}
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish',function(){
		$('.hamburger').removeClass('is-active');
	});




	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
		carouselServise();
		}, 100);
	});

	


	$('.carousel-services').owlCarousel({
		//loop: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});





	$('.reviews').owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		autoHeight: true, 
		items: 1,
		smartSpeed: 700,
	});

	$('.partners').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		autoHeight: true, 
		items: 4,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	function carouselServise() {
		$('.carousel-services-item').each(function(){
			var ths = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-img').css('min-height', thsh);
		});
	}carouselServise();
 

$(window).scroll(function(){
	if ($(this).scrollTop()> $(this).height()){
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});

$('.top').click(function(){
	$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});



	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>')); //выделяет первое слово из строки
	});

//////////////////

// $('select').selectize({
// 	delimiter: ',',
// 	persist: false,
// 	create: true
// })


//Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeight();
	}onResize();
	window.onresize = function(){
		onResize();
	}


$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
})

});
