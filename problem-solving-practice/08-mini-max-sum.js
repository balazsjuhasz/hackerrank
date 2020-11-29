// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const arraySum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  let minimum = arraySum;
  let maximum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arraySum - arr[i];

    if (sum < minimum) {
      minimum = sum;
    }

    if (sum > maximum) {
      maximum = sum;
    }
  }

  console.log(minimum, maximum);
}
