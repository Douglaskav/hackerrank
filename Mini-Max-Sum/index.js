/**
 * @author Douglas Nicolas(douglaskav)
 * [Mini-Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)
 */

function miniMaxSum(arr) {
	let x = arr.reduce((a, b) => a + b);

	let maxValue = x - Math.max(...arr);
	let minValue = x - Math.min(...arr);

	console.log(maxValue, minValue);
}

miniMaxSum([1, 2, 3, 4, 5]);
