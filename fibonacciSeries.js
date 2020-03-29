/* Function to find fibonacci series for given integer */
//using for loop
function fibonacci(n) {
	var num1 = 0;
	var num2 = 1;
	var num3;
	console.log(num1);
	console.log(num2);
	for (var i = 3; i <= n; i++) {
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
		console.log(num3);
	}
}

//inputs
fibonacci(5);
//outputs
0;
1;
1;
2;
3;
5;
