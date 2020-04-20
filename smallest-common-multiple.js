function smallestCommons(arr) {
	const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

	const lcm = (a, b) => a * b / gcd(a, b);

	let [ min, max ] = arr.sort((a, b) => a - b);
	let currentLCM = min;

	while (min < max) {
		currentLCM = lcm(currentLCM, ++min);
	}

	return currentLCM;
}

smallestCommons([ 1, 5 ]);
