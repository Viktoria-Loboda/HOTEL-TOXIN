class SlideCardsGoods {
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

let slideCardsGoods = new SlideCardsGoods();
//////////////////////////////////////////////////////

class StarRating {
	constructor() {
		this.initStarRating();
	}

	initStarRating() {
		let ratings = document.querySelectorAll('.rating');

		for (let i = 0; i < ratings.length; i++) {
			this.onclick(ratings[i]);
			this.onmouseover(ratings[i]);
			this.onmouseout(ratings[i]);
		}
	}

	onclick(rating) {
		rating.onclick = (evt) => {
			let target = evt.target;

			if (target.classList.contains('rating__item')) {
				let ratingItems = evt.currentTarget.querySelectorAll('.rating__item');
				this.removeClass(ratingItems, 'current-active');
				target.classList.add('active', 'current-active');
			}
		}
	}

	onmouseover(rating) {
		rating.onmouseover = (evt) => {
			let target = evt.target;

			if (target.classList.contains('rating__item')) {
				let ratingItems = evt.currentTarget.querySelectorAll('.rating__item');
				this.removeClass(ratingItems, 'active');
				target.classList.add('active');
				this.mouseOverActiveClass(ratingItems);
			}
		}
	}

	mouseOverActiveClass(ratingItems) {
		for(let i = 0; i < ratingItems.length; i++) {
			if (ratingItems[i].classList.contains('active')) {
				break;
			} else {
				ratingItems[i].classList.add('active');
			}
		}
	}

	onmouseout(rating) {
		rating.onmouseout = (evt) => {
			let ratingItems = evt.currentTarget.querySelectorAll('.rating__item');
			this.addClass(ratingItems, 'active');
			this.mouseOutActiveClass(ratingItems);
		}
	}

	mouseOutActiveClass(ratingItems) {
		for(let i = ratingItems.length-1; i >= 1; i--) {
			if (ratingItems[i].classList.contains('current-active')) {
				break;
			} else {
				ratingItems[i].classList.remove('active');
			}
		}
	}

	removeClass(ratingItems) {
		for (let i = 0; i < ratingItems.length; i++) {
			for (let j = 1; j < arguments.length; j++) {
				ratingItems[i].classList.remove(arguments[j]);
			}
		}
	}

	addClass(ratingItems) {
		for (let i = 0; i < ratingItems.length; i++) {
			for (let j = 1; j < arguments.length; j++) {
				ratingItems[i].classList.add(arguments[j]);
			}
		}
	}
}

let starRating = new StarRating();

// должна ещё быть орисовка по шаблону