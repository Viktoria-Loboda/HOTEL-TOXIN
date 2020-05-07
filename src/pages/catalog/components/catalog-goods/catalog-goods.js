export default class AddGoods {
	constructor(content, data) {
		this.parent = document.getElementById(content);
		this.cardTemplate = document.querySelector('#card').content.querySelector('.card-goods');

		this.addCards(data);
	}

	addCards(data) {
		let fragment = document.createDocumentFragment();
	
		for (let i = 0; i < data.length; i++) {
			fragment.appendChild(this.createCard(data[i]));
		}

		this.parent.appendChild(fragment);
	} 

	createCard(elem) {
		let card = this.cardTemplate.cloneNode(true);
		let sliders = card.querySelectorAll('.slide-goods__item > img');

		for (let i = 0; i < sliders.length; i++) {
			sliders[i].src = './assets/img/goods-image/' + elem.slides[i];
		}

		card.querySelector('.card-goods__price-room .value').textContent = elem.price;
		card.querySelector('.card-goods__number-room .value').textContent = elem.numberRoom;
		card.querySelector('.card-goods__comments > b').textContent = elem.comments;
		
		(elem.statusRoom) ? card.querySelector('.card-goods__number-room .status').textContent = ' Люкс':
												card.querySelector('.card-goods__number-room .status').textContent = '';

		for (let i = 1; i <= elem.rating; i++) {
			card.querySelector(".rating__item[data-rate='"+i+"']").classList.add('active'); 

			if (i == elem.rating) {
				card.querySelector(".rating__item[data-rate='"+i+"']").classList.add('current-active'); 
			}
		}

		return card;
	}
}