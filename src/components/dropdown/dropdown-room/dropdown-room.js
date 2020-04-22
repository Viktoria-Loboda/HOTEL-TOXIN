import Dropdown from '../dropdown.js';

let initDropdown = new Dropdown('dropdown-room-amenities', 0, 15, changingInputValue);

function changingInputValue(arr) {;
	let srtItem1 = '';
	let srtItem2 = '';
	let srtItem3 = '';
	let input = document.querySelector('#dropdown-room-amenities .dropdown__input');

	if (arr[0] == 1) {
		srtItem1 = arr[0] + ' ' + 'Спальня';
	} else if ((arr[0] > 1) && (arr[0] < 5)) {
		srtItem1 = arr[0] + ' ' + 'Спальни';
	} else if (arr[0] >= 5){
		srtItem1 = arr[0] + ' ' + 'Спален';
	}

	if (arr[1] == 1) {
		srtItem2 = arr[1] + ' ' + 'Кровать';
	} else if ((arr[1] > 1) && (arr[1] < 5)) {
		srtItem2 = arr[1] + ' ' + 'Кровати';
	} else if (arr[1] >= 5) {
		srtItem2 = arr[1] + ' ' + 'Кроватей';
	}

	if (arr[2] == 1) {
		srtItem3 = arr[2] + ' ' + 'Ванная комната';
	} else if ((arr[2] > 1) && (arr[2] < 5)) {
		srtItem3 = arr[2] + ' ' +'Ванных комнаты';
	} else if(arr[2] >= 5) {
		srtItem3 = arr[2] + ' ' + 'Ванных комнат';
	}

	if ((srtItem2 != '') || (srtItem3 != '')) {
		srtItem1 += ', ';
	} else {
		srtItem1 += '';
	}

	if (srtItem3 != '') {
		srtItem2 += ', ';
	} else {
		srtItem2 += '';
	}

	if (srtItem1 == ', ' || srtItem1 == '') {
		srtItem1 = '';
	}

	if (srtItem2 == ', ' || srtItem2 == '') {
		srtItem2 = '';
	}

	if (srtItem3 == ', ' || srtItem3 == '') {
		srtItem3 = '';
	}

	if ((srtItem1 == '') && (srtItem2 == '') && (srtItem3 == '')) {
		input.value = 'Выберите удобства';
	} else {
		input.value = srtItem1 + srtItem2 + srtItem3;
	}
}