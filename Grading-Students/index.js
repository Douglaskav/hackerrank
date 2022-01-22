/**
 * @author Douglas Nicolas(douglaskav)
 * [Grading-Students](https://www.hackerrank.com/challenges/grading/problem)
 */

function gradingStudents(grades) {
	grades.map((number) => {
		let proximoMutiploDeCinco = Math.ceil(number/5) * 5;

		let diferencaGrade = proximoMutiploDeCinco - number;
		if (diferencaGrade < 3 && number > 40) console.log(proximoMutiploDeCinco);
		else if(number < 38 || diferencaGrade >= 3) console.log(number);
		else if (number >= 38 && number <= 40) console.log(proximoMutiploDeCinco)
	})
}

gradingStudents([73, 67, 38, 33]);
