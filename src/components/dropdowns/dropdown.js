export default class Dropdown {
	constructor(id, min, max, callback) {
		this.dropdown = document.getElementById(id);
		this.btnPlus  = this.dropdown.querySelectorAll('.counter__btn--plus');
		this.btnMinus = this.dropdown.querySelectorAll('.counter__btn--minus');
		this.btnToggle = this.dropdown.querySelector('.dropdown__toggle');
		this.dropdownInput = this.dropdown.querySelector('.dropdown__input');
		this.dropdownCounter = this.dropdown.querySelector('.counter');

		this.min = min;
		this.max = max;
		this.callback = callback;

		this.initDropdown();
	}

	initDropdown() {
		this.toggleVisibilityHandler(this.btnToggle);
		this.toggleVisibilityHandler(this.dropdownInput);

		for (let i = 0; i < this.btnPlus.length; i++) {
			this.btnClickHandler(this.btnPlus[i]);
			this.btnClickHandler(this.btnMinus[i]);
		}
	}

	toggleVisibilityHandler(elem) {
    elem.onclick = () => {
      this.dropdownInput.classList.toggle('active');
			this.dropdownCounter.classList.toggle('visually-hidden');
    }
  } 

  btnClickHandler(elem) {
  	elem.onclick = (evt) => {
  		let counter = 0;
  		let target 	= evt.target;
  		let buttonPressed = target;

  		while(counter < 3) {
  			if (target.classList.contains('counter__row')) {
  				let quantity = target.querySelector('.counter__row-quantity');
  				(buttonPressed.classList.contains('counter__btn--plus')) ? this.plusCount(quantity) : this.minusCount(quantity);
  				this.checkQuantity(buttonPressed);
  				this.getQuantity();

  				return;
  			}

  			counter++;
  			target = target.parentElement;
  		}
  	}
  }

  plusCount(quantity) {
  	quantity.textContent = parseInt(quantity.textContent) + 1;
		if (quantity.textContent >= this.max) quantity.textContent = this.max;
  }

  minusCount(quantity) {
  	quantity.textContent = parseInt(quantity.textContent) - 1;
		if (quantity.textContent <= this.min) quantity.textContent = this.min;
  }

  checkQuantity(buttonPressed) {
  	let parent = buttonPressed.parentElement;
  	let btnMin = parent.querySelector('.counter__btn--minus');
  	let btnPlus = parent.querySelector('.counter__btn--plus');
  	let quantity = parseInt(parent.querySelector('.counter__row-quantity').textContent);

  	(quantity <= this.min) ? btnMin.classList.add('disabled') :	btnMin.classList.remove('disabled');
		(quantity >= this.max) ? btnPlus.classList.add('disabled') : btnPlus.classList.remove('disabled');
  }

  getQuantity() {
		let quantity = this.dropdown.querySelectorAll('.counter__row-quantity');
		let quantityValues = [];

		for (var i=0; i < quantity.length; i++) {
			quantityValues.push(parseInt(quantity[i].textContent));
		}

		this.callback(quantityValues);
	}
}
