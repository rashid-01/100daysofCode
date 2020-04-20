function myReplace(str, before, after) {
	const myArr = str.split(' ');
	const [ wordToReplace ] = myArr.filter((item) => item === before);
	return wordToReplace[0].toUpperCase() !== wordToReplace[0]
		? myArr.map((item) => (item === before ? after : item)).join(' ')
		: myArr.map((item) => (item === before ? after[0].toUpperCase() + after.slice(1) : item)).join(' ');
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
