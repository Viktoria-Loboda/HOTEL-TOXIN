import './catalog.scss';
import DatePicker from '../../components/date-picker/date-picker.js';
import Dropdown from '../../components/dropdown/dropdown.js';
import CheckboxList from '../../components/checkbox-list/checkbox-list.js';

import AddCard from './components/catalog-goods/catalog-goods.js';
import SlideCardsGoods from '../../components/card-goods/card-goods.js';
import StarRating from '../../components/star-rating/star-rating.js';

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

var cards = [
	{
		slides: ['image.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg'],
		numberRoom: 888,
		statusRoom: true,
		price: '9 990',
		rating: 5,
		comments: 145
	},
	{
		slides: ['image-4.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 840,
		statusRoom: false,
		price: '9 990',
		rating: 4,
		comments: 65
	},
	{
		slides: ['image-5.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 980,
		statusRoom: true,
		price: '8 500',
		rating: 3,
		comments: 35
	},
	{
		slides: ['image-6.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 856,
		price: '7 300',
		rating: 5,
		comments: 19
	},
	{
		slides: ['image-7.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 740,
		price: '6 000',
		rating: 4,
		comments: 44
	},
	{
		slides: ['image-8.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 982,
		price: '5 800',
		rating: 3,
		comments: 56
	},
	{
		slides: ['image-9.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 678,
		price: '5 500',
		rating: 5,
		comments: 45
	},
	{
		slides: ['image-10.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 450,
		price: '5 300',
		rating: 4,
		comments: 39
	},
	{
		slides: ['image-11.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 350,
		price: '5 000',
		rating: 3,
		comments: 77
	},
	{
		slides: ['image-12.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 666,
		price: '5 000',
		rating: 5,
		comments: 25
	},
	{
		slides: ['image-13.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 444,
		price: '5 000',
		rating: 3,
		comments: 15
	},
	{
		slides: ['image-14.jpg', 'image-2.jpg', 'image-3.jpg', 'image.jpg'],
		numberRoom: 352,
		price: '5 000',
		rating: 3,
		comments: 55
	}
];

let addCard = new AddCard('catalog-goods', cards);

let slideCardsGoods = new SlideCardsGoods();
let starRating = new StarRating();