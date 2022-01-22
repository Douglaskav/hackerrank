/**
 * @author Douglas Nicolas(douglaskav)
 * [Birthday-Cake-Candles](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)
 */

function birthdayCakeCandles(candles) {
	let maxVal = Math.max(...candles);

	return candles.filter((i) => i === maxVal).length;
}

birthdayCakeCandles([3, 2, 1, 3]);
