export default class Dropdown {
  constructor(content, data, callback) {
    this.paretn = document.getElementById(content);
    this.dropdownInput   = this.paretn.querySelector('.dropdown__input');
    this.dropdownCounter = this.paretn.querySelector('.dropdown__counter');

    this.data = data;
    this.callback = callback;

    this.toggleVisibilityHandler();
    this.btnClickHandler();
    this.btnCloseHandler();
    this.btnClearHandler();
  }

  toggleVisibilityHandler() {
    this.dropdownInput.onclick = () => {
      this.dropdownInput.classList.toggle('active');
      this.dropdownCounter.classList.toggle('visually-hidden');
    }
  }

  btnCloseHandler() {
    let buttonUse = this.paretn.querySelector('.dropdown__btn--use');

    if (buttonUse === null) return;

    buttonUse.onclick = () => {
      this.dropdownInput.classList.remove('active');
      this.dropdownCounter.classList.add('visually-hidden');
    }
  }

  btnClearHandler() {
    let buttonClear = this.paretn.querySelector('.dropdown__btn--clear');
    let btnMinus = this.paretn.querySelectorAll('.counter__btn--minus');
    let rowValues = this.paretn.querySelectorAll('.counter__row-quantity');

    if (buttonClear === null) return;
   
    buttonClear.onclick = () => {
      for (let i = 0; i < btnMinus.length; i++) {
        this.addClass(btnMinus[i]);
        rowValues[i].textContent = 0;
      }
      
      this.callback(this.paretn, this.data);
    }
  }

  btnClickHandler() {
    this.dropdownCounter.onclick = (evt) => {
      let target = evt.target;

      if (evt.target.classList.contains('counter__btn--plus')) {
        this.plusCount(target, target.previousElementSibling);
      }

      if (evt.target.classList.contains('counter__btn--minus')) {
        this.minusCount(target, target.nextElementSibling);
      }
    }
  }

  plusCount(elem, row) {
    let rowValue = parseInt(row.textContent);
    row.textContent = ++rowValue;

    if (rowValue >= 20) { 
      this.addClass(elem);
      row.textContent = 20; 
    }

    this.removeClass(elem.parentElement.querySelector('.counter__btn--minus'));
    this.callback(this.paretn, this.data);
  }

  minusCount(elem, row) {
    let rowValue = parseInt(row.textContent);
    row.textContent = --rowValue;

    if (rowValue <= 0) {
      row.textContent  = 0;
      this.addClass(elem);
    }

    this.removeClass(elem.parentElement.querySelector('.counter__btn--plus'));
    this.callback(this.paretn, this.data);
  }

  addClass(elem) {
    elem.classList.add('disabled');
  }

  removeClass(elem) {
    elem.classList.remove('disabled');
  }
}

let dropdownWords = {
  row1: ['спальня', 'спальни', 'спален'],
  row2: ['кровать', 'кровати', 'кроватей'],
  row3: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  phrase: 'Выберите удобства'
}

let newDropdown = new Dropdown('dropdown', dropdownWords, changeValueDropdownInput);


function changeValueDropdownInput(content, data) {
  let input  = content.querySelector('.dropdown__input');
  let values = content.querySelectorAll('.counter__row-quantity');
  let arrValues = [];

  let str1 = '';
  let str2 = '';
  let str3 = '';

  for (let i = 0; i < values.length; i++) {
    arrValues[i] = parseInt(values[i].textContent);
  }

  str1 = changingWord(arrValues[0], data.row1);
  str2 = changingWord(arrValues[1], data.row2);
  str3 = changingWord(arrValues[2], data.row3);

  if (str2 != '' || str3 != '') {
    if (str1 != '') str1 += ', '
    if (str3 != '' && str2 != '') str2 += ', '
  } 

  if (arrValues[0] == 0 && arrValues[1] == 0 && arrValues[2] == 0) {
    input.value = data.phrase;
  } else {
    input.value = str1 + str2 + str3;
  }

  function changingWord(arr, dataRow) {
    if (arr == 1) {
      return arr + ' ' + dataRow[0];
    } else if ((arr > 1) && (arr < 5)) {
      return arr + ' ' + dataRow[1];
    } else if (arr >= 5) {
      return arr + ' ' + dataRow[2];
    } else {
      return '';
    }
  }
}