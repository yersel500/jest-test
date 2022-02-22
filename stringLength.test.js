function giveLength (string) {
  let arrayStr = string.split('');
  return arrayStr.length;
}

test('El test debe tener 6 caracteres', () => {
  expect( giveLength('newtest') ).toBe(7);
});