/* Function to find factoial of a given integer */
//using for loop
function fact(num) {
	if (num == 0 || num == 1) {
		return 1;
	}
	for (var i = num - 1; i >= 1; i--) {
		num = num * 1;
	}
	return num;
}

//using Recursion
function factorialize(n) {
	if (n < 0) {
		return -1;
	} else if (n == 1) {
		return 1;
	} else {
		return n * factorialize(n - 1);
	}
}

/* inputs */
factorialize(5);
/* outputs */
120;
