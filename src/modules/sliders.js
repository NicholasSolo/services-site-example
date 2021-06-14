import Swiper from "swiper/bundle";

const sliders = () => {
	const header = new Swiper(".swiper1", {
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		spaceBetween: 5,
	});

	const services = new Swiper(".swiper2", {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: ".arrow-right",
			prevEl: ".arrow-left",
		},
		slidesPerView: 3,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	});
};

export default sliders;
