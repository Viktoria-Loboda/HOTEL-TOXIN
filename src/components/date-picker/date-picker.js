import '../../plugins/air-datepicker/js/datepicker.js';

export default class DatePicker {
	constructor(id, myDatePicker) {
		let wrapper = document.getElementById(id);
		this.oneInput = wrapper.querySelector('.date-picker__input--arrival');
		this.twoInput = wrapper.querySelector('.date-picker__input--departure');
		this.btnUse;

		console.log(this.twoInput);

		this.myDatePicker = myDatePicker;
		this.datePickerContent = this.myDatePicker.$content[0];
		this.datePickerNav = this.myDatePicker.$nav[0].querySelector('.datepicker--nav-title');
		this.datePickerButtons = this.myDatePicker.$datepicker[0].querySelector('.datepicker--buttons');
	
		this.initDatePicker();
	}

	initDatePicker() {
		this.showDatePicker();
		this.addBtnUseInDatePicker();
		this.hideDatePicker();
		this.deleteCommaInNav();
		this.changeFormatDate();
		this.clearDatePicker();
	}

	showDatePicker() {
		if (this.twoInput === null) return;

		this.twoInput.onclick = () => {
			this.myDatePicker.show();
		}
	}

	hideDatePicker() {
		this.btnUse.onclick = () => {
			this.myDatePicker.hide();
		}
	}

	addBtnUseInDatePicker() {
		this.btnUse = document.createElement('span');
		this.btnUse.textContent = 'применить';
		this.btnUse.classList.add('datepicker--button-use');

		this.datePickerButtons.appendChild(this.btnUse);
	}

	deleteCommaInNav() {
		let nav = this.datePickerNav.textContent;
				nav = nav.replace(',', '');

		this.datePickerNav.textContent = nav;
	}

	clearDatePicker() {
		if (this.twoInput === null) return;

		let btnClear = document.querySelector('.datepicker--button');

		btnClear.onclick = () => {
			this.twoInput.value = 'ДД.ММ.ГГГГ';
		}
	}

	changeFormatDate() {
		if (this.twoInput === null) {
			this.changeFormatDateOneIput();
		} else {
			this.changeFormatDateTwoIputs();
		}
	}

	changeFormatDateOneIput() {
		this.datePickerContent.onclick = (evt) => {
			let target = evt.target;

			if ((target.tagName === 'DIV') && (target.classList.contains('datepicker--cell'))) {
				if (target.classList.contains('-disabled-')) return;

				let arrayDatePickerValues = this.oneInput.value.split(',');
				let arrivalDate =	arrayDatePickerValues[0].split('.');
				let arrivalMonth = this.searchMonth(arrivalDate[1]);

				if (arrayDatePickerValues[1] != undefined) {
					let departureDate = arrayDatePickerValues[1].split('.');
					let departureMonth = this.searchMonth(departureDate[1]);

					this.oneInput.value = parseInt(arrivalDate[0]) + arrivalMonth + ' - ' + parseInt(departureDate[0]) + departureMonth;
				}	else {
					this.oneInput.value = parseInt(arrivalDate[0]) + arrivalMonth;
				}		
			}
		}
	}

	changeFormatDateTwoIputs() {
		this.datePickerContent.onclick = (evt) => {
			let target = evt.target;

			if ((target.tagName === 'DIV') && (target.classList.contains('datepicker--cell'))) {
				if (target.classList.contains('-disabled-')) return;

		 		let arrayDatePickerValues = this.oneInput.value.split(',');
		 		this.oneInput.value = arrayDatePickerValues[0];

		 		(arrayDatePickerValues[1] === undefined) ? this.twoInput.value = 'ДД.ММ.ГГГГ':
		 																							 this.twoInput.value = arrayDatePickerValues[1];
			}			
		}
	}

	searchMonth(month) {
		switch(month) {
			case '01':
		    return ' янв';
		  case '02':
		    return ' февр';
		  case '03':
		    return ' март';
		  case '04':
		    return ' апр';
		  case '05':
		    return ' май';
		  case '06':
		    return ' июнь';
		  case '07':
		    return ' июль';
		  case '08':
		    return ' авг';
		  case '09':
		    return ' сент';
		  case '10':
		    return ' окт';
		  case '11':
		    return ' нояб';
		  case '12':
		    return ' дек';
		  default:
		    return '';
		}
	}
}

/*Инструкция для того, чтобы установить плагин

1. обратиться к самому плагину с параметрами 
$('#date-pickers').datepicker({
	range: true,
	// inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

2. заыести свой datepicker let myDatepickers = $('#date-pickers').datepicker().data('datepicker'); 
3. обьявить класс let datepicker = new DatePicker('date-picker-wrapper', myDatepicker);
*/