import DropdownGuests from '../dropdown.js';

let initDropdownGuests = new DropdownGuests('dropdown-guest', 0, 15, changingInputValue);

function changingInputValue(arr) {;
	let srtItem1 = '';
	let srtItem2 = '';
	let srtItem3 = '';
	let input = document.querySelector('#dropdown-guest .dropdown__input');

	if (arr[0] == 1) {
		srtItem1 = arr[0] + ' ' + 'Взрослый';
	} else if (arr[0] > 1) {
		srtItem1 = arr[0] + ' ' + 'Взрослых';
	} 

	if (arr[1] == 1) {
		srtItem2 = arr[1] + ' ' + 'Ребёнок';
	} else if ((arr[1] > 1) && (arr[1] < 5)) {
		srtItem2 = arr[1] + ' ' + 'Ребёнка';
	} else if (arr[1] >= 5) {
		srtItem2 = arr[1] + ' ' + 'Детей';
	}

	if (arr[2] == 1) {
		srtItem3 = arr[2] + ' ' + 'Младенец';
	} else if ((arr[2] > 1) && (arr[2] < 5)) {
		srtItem3 = arr[2] + ' ' +'Младенца';
	} else if(arr[2] >= 5) {
		srtItem3 = arr[2] + ' ' + 'Младенцев';
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
		input.value = 'Сколько гостей';
	} else {
		input.value = srtItem1 + srtItem2 + srtItem3;
	}
}