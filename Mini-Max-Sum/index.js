function miniMaxSum(arr) {
	let x = arr.reduce((a, b) => a + b);

	let maxValue = x - Math.max(...arr);
	let minValue = x - Math.min(...arr);

	console.log(maxValue, minValue);
}

miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);
miniMaxSum([1, 2, 3, 4, 5]);
