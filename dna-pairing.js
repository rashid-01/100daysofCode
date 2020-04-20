function pairElement(str) {
	var paired = [];

	var search = function(char) {
		switch (char) {
			case 'A':
				paired.push([ 'A', 'T' ]);
				break;
			case 'C':
				paired.push([ 'C', 'G' ]);
				break;
			case 'G':
				paired.push([ 'G', 'C' ]);
				break;
			case 'T':
				paired.push([ 'T', 'A' ]);
		}
	};

	for (var i = 0; i < str.length; i++) {
		search(str[i]);
	}
	return paired;
}

pairElement('GCG');
