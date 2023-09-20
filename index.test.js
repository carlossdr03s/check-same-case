const sameCase = require('./index');

test('passes two numbers', () => {
    expect(firstNonConsecutive(1, 2)).toEqual(-1);
  });

  test('passes two latters with the same case', () => {
    expect(firstNonConsecutive('a', 'b')).toEqual(1);
  });

  test('passes two latters with the different case', () => {
    expect(firstNonConsecutive('a', 'C')).toEqual(0);
  });