if (typeof Swiper === 'function') {
	const swiperTwo = new Swiper('.swiper_2', {
		slidesPerView: 5,
		loop: true,
	});

	const swiperOne = new Swiper('.swiper_1', {
		initialSlide: 2,
		thumbs: {
			swiper: swiperTwo,
		},
	});

	const swiperTree = new Swiper('.swiper_3', {
		slidesPerView: 5,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
	});
}
// if (typeof Swiper !== 'undefined')

if (document.querySelector('.block')) {
	document.querySelector('.block').innerHTML = 'hello';
}
