export default class SlideCardsGoods {
	constructor() {
		this.slideIndex = []; // необходим для указания текущего слайда
		this.initSlideCardsGoods();
	}

	initSlideCardsGoods() {
		let cards = document.querySelectorAll('.card-goods');

		for (let i = 0; i < cards.length; i++) {
			this.slideIndex.push(1);
			this.showSlide(cards[i], i);
			this.nextSlide(cards[i], i);
			this.prevSlide(cards[i], i);
			this.currentSlide(cards[i], i);
		}
	}

	showSlide(elem, i) {
		let slides = elem.querySelectorAll('.slide-goods__item');	

		if (this.slideIndex[i] > slides.length) this.slideIndex[i] = 1;
		if (this.slideIndex[i] < 1) this.slideIndex[i] = slides.length;

		for (let i=0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[this.slideIndex[i] - 1].style.display = "block";
	}

	nextSlide(elem, i) {
		let next = elem.querySelector('.slide-goods__btn--next');

		next.onclick = () => {
			this.slideIndex[i] += 1;
			this.showSlide(elem, i);
			this.changeActiveDot(elem, this.slideIndex[i]);
		}
	}

	prevSlide(elem, i) {
		let prev = elem.querySelector('.slide-goods__btn--prev');

		prev.onclick = () => {
			this.slideIndex[i] -= 1;
			this.showSlide(elem, i);
			this.changeActiveDot(elem, this.slideIndex[i]);
		}
	}

	currentSlide(elem, i) {
		let dots = elem.querySelector('.slide-goods__dots');

		dots.onclick = (evt) =>  {
			let target = evt.target;
			if (target.tagName != 'SPAN') return;

			this.slideIndex[i] = parseInt(target.id);
			this.showSlide(elem, i);
			this.changeActiveDot(elem, this.slideIndex[i]);
		}
	}

	changeActiveDot(elem, i) {
		let dots = elem.querySelectorAll('.slide-goods__dots-item');
		let activeDot = elem.querySelector('.slide-goods__dots-item.active');

		activeDot.classList.remove('active');
		dots[i - 1].classList.add('active');
	}
}