
$(document).ready(function() {


//-----------------плавный скролл----------------

$(".nav__menu").on("click","a", function (event) {
	 
	 event.preventDefault();
	 
	 var id  = $(this).attr('href'),
	
	 top = $(id).offset().top;
	
	 $('body,html').animate({scrollTop: top}, 1500);
});

$(".menu_visible_xs").on("click","a", function (event) {
	 
	 event.preventDefault();
	 
	 var id  = $(this).attr('href'),
	
	 top = $(id).offset().top;
	
	 $('body,html').animate({scrollTop: top}, 1500);
});

$(".footer__menu").on("click","a", function (event) {
	 
	 event.preventDefault();
	 
	 var id  = $(this).attr('href'),
	
	 top = $(id).offset().top;
	
	 $('body,html').animate({scrollTop: top}, 1500);
});

// --------------------------------------------------

//--------секция promotions - ховеры---------------

$('.promotions__item > img').mouseenter(function() {
	var text = $(this).next();
	var paranja = $(this).next().next();
	paranja.css({'visibility': 'visible'});
	text.css({'z-index': '-1'});
});

$('.promotions__item > img').mouseleave(function() {
	var text = $(this).next();
	var paranja = $(this).next().next();
	paranja.css({'visibility': 'hidden'});
	text.css({'z-index': '0'});
});

$('.paranja').mouseenter(function() {
	$(this).css({'visibility': 'visible'});
	$(this).prev().css({'visibility' : 'hidden'});
});

$('.paranja').mouseleave(function() {
	$(this).css({'visibility': 'hidden'});
	$(this).prev().css({'visibility' : 'visible'});
});

$('.promotions__item p').mouseenter(function() {
	$(this).css({'visibility': 'hidden'});
});

$('.promotions__item p').mouseleave(function() {
	$(this).css({'visibility': 'visible'});
});

// --------------------------------------------------


//----секция photo - ховеры и просмотр фото----------



$('.photo__item>img').hover(function() {
	$(this).next().css({visibility: 'visible'});
}, function() {
	$(this).next().css({visibility: 'hidden'});
});

$('.photo-paranja').hover(function() {
	$(this).css({visibility: 'visible'});
}, function() {
	$(this).css({visibility: 'hidden'});
});

$('.photo-paranja').click(function() {
	$('.big-foto_close').click(function(e) {
		e.preventDefault();
		bigImage.remove();
		$('.for-big-paranja').removeClass('big-paranja');
	});

	$(this).css({visibility: 'hidden'});
	$(this).prev().hover(function() {
		$(this).next().css({visibility: 'hidden'});
	});
	var bigImage = $(this).prev().clone();
	bigImage.addClass('photo_view');
	$(this).prev().after(bigImage);
	$('.for-big-paranja').addClass('big-paranja');

	$('.photo__item>img').hover(function() {
	$(this).next().css({visibility: 'visible'});
}, function() {
	$(this).next().css({visibility: 'hidden'});
});

});

$('.photo-paranja>img').click(function() {
	$(this).parent().css({visibility: 'hidden'});
});



// $('.photo__item img').click(function() {
// 	$(this).css({
// 		transform: "scale(1.3)",
// 		position: 'absolute',
// 		left: '28%',
// 		marginTop: '-400px'
// 	});
// });

// --------------------------------------------------

//-------------секция price - active-----------------

$('.price-col').click(function() {
	$(this).addClass('price-col_checked');
});

// --------------------------------------------------

//----------------слайдер отзывов--------------------


$('.multiple-slide').slick({
  infinite: true,
  slidesToShow: 3,
  //количество слайдов, которые выводятся на экране
  slidesToScroll: 1,
  //количество слайдов, которые перелистываются за один раз
  autoplay: true,
  autoplaySpeed: 2000,
});


	
// -----------------Меню-бургер-----------------------

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".main-header__burger-button" ).click(function() {
	$( ".menu_visible_xs" ).slideToggle( "slow", function() {
		$( ".main-header__burger-button" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".menu_visible_xs" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".main-header__burger-button" ).show();
	});
});



	$('.single-slide').slick();

	// Аккордеон

	
	$('.price__choose-age').click(function() {
		$('.header_up-sm').toggle();
		$('.empty-text').hide();
		$('.price__xs_checked').toggle();
	});

	$('.price__choose-place').click(function() {
		$('.header_left').toggle();
		$('.price__choose-place .price__xs_checked').toggle();
	});

	$('.price__choose-time').click(function() {
		$('.header_long').toggle();
		$('.price__choose-time .price__xs_checked').toggle();
		$('.header_long-3hours_invis-xs').hide();
	});


	// if($('.header_up-sm').hasClass('activePriceHeader')) {
	// 	$('.header_up-sm').click(function() {
	// 		console.log('true');
	// 		$('.header_up-sm').css({display: 'none'});
	// 		$(this).removeClass('activePriceHeader');
	// 	});
	// }
	


});