function uniteUnique(arr) {
	var args = Array.from(arguments);
	var uniqueValues = [];
	for (var i = 0; i < args.length; i++) {
		for (var j = 0; j < args[i].length; j++) {
			if (!uniqueValues.includes(args[i][j])) {
				uniqueValues.push(args[i][j]);
			}
		}
	}
	return uniqueValues;
}

uniteUnique([ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ]);
