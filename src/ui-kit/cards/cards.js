import './cards.scss';
import '../../components/star-rating/star-rating.js';
import '../../components/card-goods/card-goods.js';
import DatePicker from '../../components/date-picker/date-picker.js';

$('#date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepicker = $('#date-picker').datepicker().data('datepicker');
let datepicker = new DatePicker('wrapper-date-picker', myDatepicker);

$('#date-pickers').datepicker({
	range: true,
	inline: true,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepickers = $('#date-pickers').datepicker().data('datepicker');
let datepickers = new DatePicker('wrapper-date-pickers', myDatepickers); 

$('#order-date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepickerOrderCard = $('#order-date-picker').datepicker().data('datepicker');
let datepickerOrderCard = new DatePicker('order-card__date-picker', myDatepickerOrderCard);

import Dropdown from '../../components/dropdown/dropdown.js';

let dropdownWords = {
  row1: ['взрослый', 'взрослых', 'взрослых'],
  row2: ['ребенок', 'детей', 'детей'],
  row3: ['младенец', 'младенцев', 'младенцев'],
  phrase: 'Сколько гостей'
}

let newDropdown = new Dropdown('wrapper-dropdown', dropdownWords);
let newDropdownOrderCard = new Dropdown('order-card___wrapper-dropdown', dropdownWords);