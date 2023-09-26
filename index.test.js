const sameCase = require('./index');

test('passes two numbers', () => {
  expect(sameCase('2', '1')).toEqual(-1);
});

  test('passes two latters with the same case', () => {
    expect(sameCase('a', 'b')).toEqual(1);
  });

  test('passes two latters with the different case', () => {
    expect(sameCase('a', 'C')).toEqual(0);
  });