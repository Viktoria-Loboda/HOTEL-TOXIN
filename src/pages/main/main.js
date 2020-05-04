import './main.scss';
import DatePicker from '../../components/date-picker/date-picker.js';
import Dropdown from '../../components/dropdown/dropdown.js';

$('#date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepicker = $('#date-picker').datepicker().data('datepicker');
let datepicker = new DatePicker('wrapper-date-picker', myDatepicker);


let dropdownWords = {
  row1: ['взрослый', 'взрослых', 'взрослых'],
  row2: ['ребенок', 'детей', 'детей'],
  row3: ['младенец', 'младенцев', 'младенцев'],
  phrase: 'Сколько гостей'
}

let newDropdown = new Dropdown('wrapper-dropdown', dropdownWords);