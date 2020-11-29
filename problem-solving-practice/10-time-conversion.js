/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const tokens = s.split(':');
  let hours = parseInt(tokens[0]);
  let minutes = tokens[1];
  let seconds = tokens[2].slice(0, 2);

  if (s.includes('PM')) {
    if (hours !== 12) {
      hours += 12;
    }
  } else {
    if (hours === 12) {
      hours = 0;
    }
  }

  const clock24 = ('00' + hours).slice(-2) + ':' + minutes + ':' + seconds;
  return clock24;
}
