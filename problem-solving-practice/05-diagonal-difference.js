function diagonalDifference(arr) {
  // Write your code here
  let diag1 = arr.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentIndex < array.length) {
      return accumulator + array[currentIndex][currentIndex];
    }
  }, 0);
  let diag2 = arr.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentIndex < array.length) {
      return accumulator + array[currentIndex][array.length - 1 - currentIndex];
    }
  }, 0);
  return Math.abs(diag1 - diag2);
}
