function reverseString(str) {
	let reversed = '';
	for (char of str) {
		reversed = char + reversed;
	}
	return reversed;
}
