/**
 * @author Douglas Nicolas(douglaskav)
 * [Sales-By-Match](https://www.hackerrank.com/challenges/sock-merchant/problem)
 */

function sockMerchant(arr) {
	let matches = 0,
		withoutPair = [];

	for (let i = 0; i < arr.length; i++) {
		if (withoutPair.includes(arr[i])) {
			withoutPair.splice(withoutPair.indexOf(arr[i]), 1);
			matches++;
		} else {
			withoutPair.push(arr[i]);
		}
	}

	return matches;
}
