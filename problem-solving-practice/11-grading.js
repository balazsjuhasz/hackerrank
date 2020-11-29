/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  return grades.map((grade) => {
    let modulo = grade % 5;

    if (modulo > 2 && grade >= 38) {
      return grade + 5 - modulo;
    } else {
      return grade;
    }
  });
}
