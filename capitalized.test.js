function capitalize(string) {
  let newArray = string.toLowerCase().split('');
  newArray[0] = newArray[0].toUpperCase();
  let newString = newArray.join('');
  return newString;

}



test('The input will be HELLO and the ouput Hello', () => {
  expect(capitalize('HELLO')).toBe('Hello');
})