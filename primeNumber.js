/* Function to check whether given integer is prime or not */
//using for loop
function checkPrime(n) {
	for (let i = 2; i <= n; i++) {
		if (i % 2 === 0) return false;
		else return n !== 1;
	}
}

//inputs
checkPrime(3);
//outputs
true;
