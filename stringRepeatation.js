/* Function to repeat a string by given number of times */
function repeatString(str, times) {
	var string = '';
	while (times > 0) {
		string += str;
		times--;
	}
	return string;
}

/* inputs */
repeatString('abc', 3);
/* outputs */
('abcabcabc');
