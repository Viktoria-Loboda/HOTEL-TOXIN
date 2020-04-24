import './cards.scss';
import DatePicker from '../../components/date-picker/date-picker.js';

$('#date-picker').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepicker = $('#date-picker').datepicker().data('datepicker');
let datepicker = new DatePicker('date-picker-wrapper', myDatepicker);

$('#date-picker-two').datepicker({
	range: true,
	inline: false,
	clearButton: true,
	disableNavWhenOutOfRange: false,
	minDate: new Date()
});

let myDatepickers = $('#date-picker-two').datepicker().data('datepicker');
let datepickers = new DatePicker('date-picker-wrapper-two', myDatepickers);