const sumAll = function(a, b) {
	if(	typeof a !== "number" || 
		typeof b !== "number" || 
		a < 0 || b < 0) return "ERROR";

	[a, b] = a < b ? [a, b] : [b, a];

	return (b - a + 1) / 2 * (a + b);
};

// Do not edit below this line
module.exports = sumAll;
