'use strict';

describe('guessNumber', () => {

  // write your tests here...
  it('should return 4A0B when matched value and positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 1234;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("4A0B");
  });

  it('should return nA(4-n)B when matched value and partially matched positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 1423;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("1A3B");
  });

  it('should return mAnB when partially matched value and positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 1526;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("1A1B");
  });

  it('should return 0A4B when matched value and unmatched positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 4321;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("0A4B");
  });

  it('should return 0AnB when partially matched value and unmatched positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 3456;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("0A2B");
  });

  it('should return 0A0B when unmatched value and positions', () => {
    // Given
    let num1 = 1234;
    let num2 = 5678;

    // When
    let result = guessNumber(num1,num2);

    // Then
    expect(result).toEqual("0A0B");
  });
});
