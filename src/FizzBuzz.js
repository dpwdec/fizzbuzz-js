function fizzBuzz(n) {
  answer = '';
  if ((n % 3) === 0) {
    answer += 'Fizz';
  }
  if ((n % 5) === 0) {
    answer += 'Buzz';
  }

  if ((n % 3) != 0 && (n % 5) != 0) {
    answer = n;
  }
  return answer;
}
