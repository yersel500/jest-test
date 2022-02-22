function reverseStr (string) {
  
  let arrayStr = string.split('').reverse().join('');
  return arrayStr;
}

test('El test debe tener 6 caracteres', () => {
  expect( reverseStr('newtest') ).toBe('tsetwen');
});