var swiper = new Swiper('.catalog-slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		375: {
			spaceBetween: 10,
		},
		425: {
			slidesPerView: 1,

			spaceBetween: 30,
		},

		588: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		769: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev',
	},
})
var swiper = new Swiper('.sale-slider', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		375: {
			slidesPerView: 1,

			spaceBetween: 10,
		},
		425: {
			slidesPerView: 1,

			spaceBetween: 30,
		},

		588: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1025: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev',
	},
})

var swiper = new Swiper('.blog-slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		375: {
			spaceBetween: 10,
		},
		425: {
			slidesPerView: 1,

			spaceBetween: 30,
		},

		588: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev',
	},
})

document.querySelector(".nav__toggle").addEventListener("click", function () {
	document.querySelector(".header__menu").classList.toggle("active");
	this.classList.toggle("active");
  });


const init = () => {
	const marquee = document.querySelectorAll('.marquee')

	if (!marquee) return

	marquee.forEach(item => {
		const marqueeInner = item.querySelector('.marquee__inner')
		const marqueeContent = marqueeInner.querySelector('.marquee__content')

		// Duration
		const duration = item.getAttribute('data-marquee-duration')

		// Element Clone
		const marqueeContentClone = marqueeContent.cloneNode(true)
		marqueeInner.append(marqueeContentClone)

		// Marquee animation
		const marqueeContentAll = marqueeInner.querySelectorAll('.marquee__content')
		marqueeContentAll.forEach(element => {
			gsap.to(element, {
				x: '-101%',
				repeat: -1,
				duration: duration,
				ease: 'linear',
			})
		})
	})
}

document.addEventListener('DOMContentLoaded', init)
