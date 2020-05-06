import './catalog.scss';
import DatePicker from '../../components/date-picker/date-picker.js';
import Dropdown from '../../components/dropdown/dropdown.js';
import CheckboxList from '../../components/checkbox-list/checkbox-list.js';

//---------date-picker
$('#date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepicker = $('#date-picker').datepicker().data('datepicker');
let datepicker = new DatePicker('wrapper-date-picker', myDatepicker);

//---------dropdown Гости
let dropdownWords = {
  row1: ['взрослый', 'взрослых', 'взрослых'],
  row2: ['ребенок', 'детей', 'детей'],
  row3: ['младенец', 'младенцев', 'младенцев'],
  phrase: 'Сколько гостей'
}

let newDropdown = new Dropdown('wrapper-dropdown', dropdownWords);

//----------dropdown Удобства номера
let dropdownAmenitiesWords = {
  row1: ['спальня', 'спальни', 'спален'],
  row2: ['кровать', 'кровати', 'кроватей'],
  row3: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  phrase: 'Выберите удобства'
}

let newDropdownAmenities = new Dropdown('wrapper-dropdown--amenities', dropdownAmenitiesWords);

//----------checkbox list
let checkboxList = new CheckboxList('checkbox-list');