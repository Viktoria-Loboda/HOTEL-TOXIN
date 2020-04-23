export default class CheckboxList {
	constructor(content) {
		let parent = document.getElementById(content);
		this.checkboxList = parent.querySelector('.checkbox__list');
		this.checkboxListToggle = parent.querySelector('.checkbox-list-toggle');

		this.toggleVisibilityHandler();
	}

	toggleVisibilityHandler() {
		this.checkboxListToggle.onclick = () => {
			this.checkboxListToggle.classList.toggle('active');
			this.checkboxList.classList.toggle('visually-hidden');
		}
	}
}