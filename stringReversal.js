/* Following functions will be use to revrse a given String */
//Method-1 using for loop
function stringReversal(str) {
	let reversed = '';
	for (char of str) {
		reversed = char + reversed;
	}
	return reversed;
}

//Method-2 using built functions
function reverseAString(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}

/* inputs */
stringReversal('Hello');
/* outputs */
('olleH');
