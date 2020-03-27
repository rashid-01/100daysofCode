/* Following function will be used to check a String is pallindrome or not */
//Method-1 using for loop
function checkPallindrome(str) {
	let regEx = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(regEx, '');
	var len = str.length;
	for (var i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false;
		} else {
			return true;
		}
	}
}

//Method-2 using built functions
function pallindrome(str) {
	let reversed = str.split('').reverse().join('');
	return str === reversed;
}

/* inputs */
checkPallindrome('noon');
/* outputs */
('noon');
