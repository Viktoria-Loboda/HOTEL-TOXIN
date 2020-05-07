export default class StarRating {
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