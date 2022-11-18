const fibonacci = function(n) {
	if(n < 0) return "OOPS";

	let arr = [1, 1];
	for(let i = 2; i <= n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr[n - 1]
};

// Do not edit below this line
module.exports = fibonacci;
