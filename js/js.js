/*------------------------------------    
  11. Shopping Cart Area
--------------------------------------*/

$('.cart__menu').on('click', function () {
	$('.shopping__cart').addClass('shopping__cart__on');
	$('.body__overlay').addClass('is-visible');

});

$('.offsetmenu__close__btn').on('click', function () {
	$('.shopping__cart').removeClass('shopping__cart__on');
	$('.body__overlay').removeClass('is-visible');
});

/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
	meanMenuContainer: '.mobile-menu-area',
	meanScreenWidth: "991",
	meanRevealPosition: "right",
});




jQuery('nav.active-mobile-menu').meanmenu();





var widthcount = $(window).width();
if (widthcount >= 320 && widthcount < 992) {
	$('.sfcr-close').hide();
}
else {
	$('.sfcr-close').show();
}

$(window).resize(function () {
	widthcount = $(window).width();
	if (widthcount >= 320 && widthcount < 992) {
		$('.sfcr-close').hide();
	}
	else {
		$('.sfcr-close').show();
	}
});

$(".jstest").on("click", function () {

	if (widthcount >= 320 && widthcount < 992) {

		$('.sfcr-close').slideToggle();
	}
});


$(".plus").on("click", function () {
	$(this).toggleClass('minus plus');

})


/*cart plus-minus*/

$('.minus-btn').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest('div').find('input');
	var value = parseInt($input.val());

	if (value > 1) {
		value = value - 1;
	} else {
		value = 0;
	}

	$input.val(value);

});

$('.plus-btn').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest('div').find('input');
	var value = parseInt($input.val());

	if (value < 100) {
		value = value + 1;
	} else {
		value = 100;
	}

	$input.val(value);
});

$('.like-btn').on('click', function () {
	$(this).toggleClass('is-active');
});





/*OVERLAY SEARCH*/
$(function (e) {
	var $open = $('.js-searchOpen');
	var $close = $('.js-searchClose');
	var $body = $('body');
	var $lay = $('.search-overlay');
	var $input = $('.search-form > .search');

	$open.on('click', function (e) {
		e.preventDefault();
		$body.addClass('-hide');
		$lay.addClass('-show');
		$input.focus(); // focus
	});
	// .js-searchClose
	$close.on('click', function (e) {
		e.preventDefault();
		$body.removeClass('-hide');
		$lay.removeClass('-show'); // .search-overlay .-show
	});
});


/*Brand area */
$(".active-brand-owl").owlCarousel({
	autoPlay: true,
	slideSpeed: 2000,
	pagination: false,
	navigation: false,
	items: 5,
	/* transitionStyle : "fade", */
	/* [This code for animation ] */
	navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	itemsDesktop: [1199, 5],
	itemsDesktopSmall: [980, 5],
	itemsTablet: [768, 3],
	itemsMobile: [479, 2],
});

/* Featured Product*/
$(".active-owl-product").owlCarousel({
	autoPlay: false,
	slideSpeed: 2000,
	pagination: false,
	navigation: true,
	items: 2,
	/* transitionStyle : "fade", */
	/* [This code for animation ] */
	navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
	itemsDesktop: [1199, 2],
	itemsDesktopSmall: [980, 2],
	itemsTablet: [768, 2],
	itemsMobile: [480, 1],
});

$(".active-owl-product2").owlCarousel({
	autoPlay: false,
	slideSpeed: 2000,
	pagination: false,
	navigation: true,
	items: 2,
	/* transitionStyle : "fade", */
	/* [This code for animation ] */
	navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
	itemsDesktop: [1199, 2],
	itemsDesktopSmall: [980, 2],
	itemsTablet: [768, 2],
	itemsMobile: [480, 1],
});

$(".active-featured-owl").owlCarousel({
	autoPlay: false,
	slideSpeed: 2000,
	pagination: false,
	navigation: true,
	items: 4,
	/* transitionStyle : "fade", */
	/* [This code for animation ] */
	navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
	itemsDesktop: [1199, 3],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 2],
	itemsMobile: [480, 1],
});




/*Scroll to top button start*/

$(".to-top").on("click", function () {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.to-top').fadeIn(1000);
	} else {
		$('.to-top').fadeOut(1000);
	}
})


/*Scroll to top button end*/



$('.register-inner').hide();
$('.login-log').hide();
$('.create-log').click(function() {
	$('.register-inner').show();
	$('.login-inner').hide();
	$('.create-log').hide();
	$('.login-log').show();
});
$('.login-log').click(function () {
	$('.register-inner').hide();
	$('.login-inner').show();
	$('.create-log').show();
	$('.login-log').hide();
});
	
	
/* For sticky menu*/

$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.sticky-cart').addClass('sticky');
	} else {
		$('.sticky-cart').removeClass('sticky');

	}

})