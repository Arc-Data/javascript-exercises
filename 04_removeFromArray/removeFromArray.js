const removeFromArray = function(arr) {
	return arr.filter( i => !Array.from(arguments).includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;
