import $ from 'jquery';
import '../../static/favicons.js';
import './formElements.scss';
import '../../components/star-rating/star-rating.js';
import Dropdown from '../../components/dropdown/dropdown.js';

let dropdownWords = {
  row1: ['спальня', 'спальни', 'спален'],
  row2: ['кровать', 'кровати', 'кроватей'],
  row3: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  phrase: 'Выберите удобства'
}

let newDropdown = new Dropdown('dropdown', dropdownWords);
let newDropdownTwo = new Dropdown('dropdown-furniture', dropdownWords);

let dropdownWordsGuests = {
  row1: ['взрослый', 'взрослых', 'взрослых'],
  row2: ['ребенок', 'детей', 'детей'],
  row3: ['младенец', 'младенцев', 'младенцев'],
  phrase: 'Сколько гостей'
}

let dropdownGuests = new Dropdown('dropdown-guests', dropdownWordsGuests);
let dropdownGuestsTwo = new Dropdown('dropdown-guests-two', dropdownWordsGuests);

import Checkbox from '../../components/checkbox-list/checkbox-list.js';

let checkbox = new Checkbox('checkbox-list');
let checkboxOpen = new Checkbox('checkbox-list--open');