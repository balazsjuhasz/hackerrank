// Complete the staircase function below.
function staircase(n) {
  for (let level = 1; level <= n; level++) {
    console.log(' '.repeat(n - level) + '#'.repeat(level));
  }
}
