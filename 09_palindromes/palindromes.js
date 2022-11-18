const palindromes = function (someStr) {
	someStr = someStr.toLowerCase().replace(/[^\w]/g, '')
	let i = 0, j = someStr.length - 1;
	console.log(someStr)

	while(i < j) {
		if(someStr[i] != someStr[j]) return false;
		i++, j--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
