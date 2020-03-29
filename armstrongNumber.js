/* function to check whether given integer is armstron or not */
//using for loop
function checkArmstrong(n) {
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			for (var k = 1; k <= n; k++) {
				var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
				var plus = i * 100 + j * 10 + k;
				if (pow == plus) {
					console.log(pow);
				}
			}
		}
	}
}

//Method-2
