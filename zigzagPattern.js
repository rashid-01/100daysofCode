/* Function to print zigzag pattern for the given integer */
//using for loop
function printZigZag(n) {
	let flag = 0;
	for (var i = 1; i <= n; i++) {
		if (flag == 0) {
			console.log('&nbsp;' + i + '&nbsp;' + '<br/>');
			flag = 1;
		} else {
			console.log(i + '&nbsp;' + ++i + '<br/>');
			flag = 0;
		}
	}
}
//inputs
printZigZag(10);
//outputs
