$(function() {

	$('.btn_mnu').click(function (e) { 
		e.preventDefault();
		$(this).toggleClass('active');
		$(".left_side").toggleClass("active");
	});

	$("body, .left_side").niceScroll({
		horizrailenabled : false,
		"verge" : "500",
		cursorwidth: "15px"
	});

	$(".gallery").css("min-height", $(document).height()*1.1);

	$(".gallery img").lazyload({
		effect : "fadeIn",
		threshold : 1000
	}).parent().hover(function() {
		$(".gallery a").css("opacity", ".8");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});

	$(".filter_label").click(function() {
		$(".filter_label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});

	$(".gallery a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 400,
		mainClass: 'mfp-fade',

	}).click(function() {
		$("button.mfp-arrow").delay(1000).fadeIn();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	// $('.swap, .filter_label').on('click', function () {
	// 	$('.swap').css('display', 'none')
	// 	$('.filter_items').toggleClass('filter_items-display')
	// });
	// $('.filter_label').click(function (e) { 
	// 	e.preventDefault();
	// 	$('.swap').css('display', 'block')
	// });



		$('.center, .filter_label').on('click', function () {
		$('.center').css('display', 'none')
		$('.filter_items').toggleClass('filter_items-display')
	});
	$('.filter_label').click(function (e) { 
		e.preventDefault();
		$('.center').css('display', 'block')
	});







});

$(document).ready(function() {
	$(window).on("load", function() {
		$(".loader").delay(300).fadeOut("slow");
	})
});