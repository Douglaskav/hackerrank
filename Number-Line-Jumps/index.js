/**
 * @author Douglas Nicolas(douglaskav)
 * [Number Line Jumps](https://www.hackerrank.com/challenges/kangaroo)
 */

// Velocity Relativity Concept
Vrel = V1 - V2 = race
Vrel = V1 + V2 = head-on collision

function kangaroo(x1, v1, x2, v2) {
	let isPossibleToCatchUp =
		(x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1) ? true : false;

	if (isPossibleToCatchUp) {
		return "NO";
	} else if ((x1 - x2) % (v2 - v1) === 0) return "YES";
	else return "NO";
}

console.log(kangaroo(2, 1, 1, 2));
console.log(kangaroo(21, 6, 47, 3));
console.log(kangaroo(28, 8, 96, 2));
