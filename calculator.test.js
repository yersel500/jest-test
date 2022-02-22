class Calculator {

  add(a,b) {
    return (a + b);
  }

  substract(a,b) {
    return (a - b);
  }

  divide(a,b) {
    return (a/b);
  }

  multiply(a,b) {
    return (a * b);
  }
}

const theCalc = new Calculator(3,5);

describe('Tests of sum', () => {
  test('The sum of 3 + 5 should be 8', () => {
    expect(theCalc.add(3,5)).toBe(8);
  })
  
  test('The sum of 4 + 6 should be 10', () => {
    expect(theCalc.add(4,6)).toBe(10);
  })
  
  test('The sum of 5 + 7 should be 12', () => {
    expect(theCalc.add(5,7)).toBe(12);
  })

})

describe('Tests of substract', () => {
  test('The substract of 5 - 3 should be 2', () => {
    expect(theCalc.substract(5,3)).toBe(2);
  })
  
  test('The substract of 6 - 4 should be 2', () => {
    expect(theCalc.substract(6,4)).toBe(2);
  })
  
  test('The substract of 7 - 5 should be 2', () => {
    expect(theCalc.substract(7,5)).toBe(2);
  })

})

describe('Tests of division', () => {
  test('The division of 4 / 2 should be 2', () => {
    expect(theCalc.divide(4,2)).toBe(2);
  })
  
  test('The division of 6/4 should be 1.5', () => {
    expect(theCalc.divide(6,4)).toBe(1.5);
  })
  
  test('The divide of 15 / 5 should be 3', () => {
    expect(theCalc.divide(15,5)).toBe(3);
  })

})

describe('Tests of multiplication', () => {
  test('The multiplication of 4 * 2 should be 8', () => {
    expect(theCalc.multiply(4,2)).toBe(8);
  })
  
  test('The multiplication of 6 * 4 should be 24', () => {
    expect(theCalc.multiply(6,4)).toBe(24);
  })
  
  test('The multiplication of 15 * 5 should be 75', () => {
    expect(theCalc.multiply(15,5)).toBe(75);
  })

})


