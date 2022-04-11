/**
 * @author Douglas Nicolas(douglaskav)
 * [Arrays:Left-Rotation](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)
 */


function rotLeft(a, d) {
  // Write your code here
	let x = a.slice(d, a.length);	
	let y = a.slice(0, d);
	return x.concat(y);
}

// or just return [...a.slice(d),...a.slice(0,d)]

rotLeft([1, 2, 3, 4, 5], 2);
