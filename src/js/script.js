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

