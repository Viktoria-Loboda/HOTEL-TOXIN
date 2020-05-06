export default class Dropdown {
  constructor(content, data) {
    this.parent = document.getElementById(content);
    this.dropdownInput   = this.parent.querySelector('.dropdown__input');
    this.dropdownCounter = this.parent.querySelector('.dropdown__counter');

    this.data = data;
    this.initDropdow();
  }

  initDropdow() {
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
    let buttonUse = this.parent.querySelector('.dropdown__btn--use');

    if (buttonUse === null) return;

    buttonUse.onclick = () => {
      this.dropdownInput.classList.remove('active');
      this.dropdownCounter.classList.add('visually-hidden');
    }
  }

  btnClearHandler() {
    let buttonClear = this.parent.querySelector('.dropdown__btn--clear');
    let btnMinus = this.parent.querySelectorAll('.counter__btn--minus');
    let rowValues = this.parent.querySelectorAll('.counter__row-quantity');

    if (buttonClear === null) return;
   
    buttonClear.onclick = () => {
      for (let i = 0; i < btnMinus.length; i++) {
        this.addClass(btnMinus[i]);
        rowValues[i].textContent = 0;
      }
      
      this.changeValueDropdownInput();
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
    this.changeValueDropdownInput();
  }

  minusCount(elem, row) {
    let rowValue = parseInt(row.textContent);
    row.textContent = --rowValue;

    if (rowValue <= 0) {
      row.textContent  = 0;
      this.addClass(elem);
    }

    this.removeClass(elem.parentElement.querySelector('.counter__btn--plus'));
    this.changeValueDropdownInput();
  }

  addClass(elem) {
    elem.classList.add('disabled');
  }

  removeClass(elem) {
    elem.classList.remove('disabled');
  }

  changeValueDropdownInput() {
    let rowValues = this.parent.querySelectorAll('.counter__row-quantity');
    let arrValues = [];

    let str1 = '';
    let str2 = '';
    let str3 = '';

    for (let i = 0; i < rowValues.length; i++) {
      arrValues[i] = parseInt(rowValues[i].textContent);
    }

    str1 = changingWord(arrValues[0], this.data.row1);
    str2 = changingWord(arrValues[1], this.data.row2);
    str3 = changingWord(arrValues[2], this.data.row3);

    if (str2 != '' || str3 != '') {
      if (str1 != '') str1 += ', ';
      if (str3 != '' && str2 != '') str2 += ', ';
    } 

    if (arrValues[0] == 0 && arrValues[1] == 0 && arrValues[2] == 0) {
      this.dropdownInput.value = this.data.phrase;
    } else {
      this.dropdownInput.value = str1 + str2 + str3;
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
}