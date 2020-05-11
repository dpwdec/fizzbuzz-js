describe('FizzBuzz', function() {
  it('1 returns 1', function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
  
  it('3 returns Fizz', function() {
    expect(fizzBuzz(3)).toEqual('Fizz')
  });
});