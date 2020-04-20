function convertHTML(str) {
	var splitStr = str.split('');
	for (var i = 0; i < splitStr.length; i++) {
		switch (splitStr[i]) {
			case '&':
				splitStr[i] = '&amp;';
				break;
			case '<':
				splitStr[i] = '&lt;';
				break;
			case '>':
				splitStr[i] = '&gt;';
				break;
			case '"':
				splitStr[i] = '&quot;';
				break;
			case "'":
				splitStr[i] = '&apos;';
				break;
		}
	}
	splitStr = splitStr.join('');
	return splitStr;
}

convertHTML('Dolce & Gabbana');
