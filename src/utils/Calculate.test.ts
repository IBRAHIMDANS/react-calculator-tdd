import { division, multiply, subtract, sum } from './Calculate';

describe('Testing function sum', () => {
  test('function sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('function sum with 0', () => {
    expect(sum(0)).toBe(0);
  });
  test('function sum without params', () => {
    expect(sum()).toBe(0);
  });
  test('function sum multiple params', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
  test('function sum with negative params', () => {
    expect(sum(-1, -2, 3)).toBe(0);
  });
});

describe('Testing function subtract', () => {
  test('function subtract with params', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
  test('function subtract without params', () => {
    expect(subtract()).toBe(0);
  });
  test('function subtract negative return', () => {
    expect(subtract(1, 2, 3, 4, 4, 5, 6)).toBe(-23);
  });
  test('function subtract positive return', () => {
    expect(subtract(1000, 500)).toBe(500);
  });
  test('function subtract with negative params', () => {
    expect(subtract(-1000, -500)).toBe(-500);
  });
});

describe('Testing function multiply', () => {
  test('function multiply with params', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test('function multiply without params', () => {
    expect(multiply()).toBe(0);
  });
  test('function multiply with zero in params', () => {
    expect(multiply(2,0)).toBe(0);
  });
  test('function multiply with muliply params', () => {
    expect(multiply(2,1,2,4,5,6)).toBe(480);
  });
  test('function multiply with negative params', () => {
    expect(multiply(2,-1)).toBe(-2);
  });
});

describe('Testing function division', () => {
  test('function division with params', () => {
    expect(division(1, 2)).toBe(2);
  });

  test('function division with 0 return Error', () => {
    expect(division(0,0)).toEqual("ERROR");
  });

  test('function division with params positive', () => {
    expect(division(20,5)).toEqual(4);
  });

  test('function division with params negative', () => {
    expect(division(-20 ,-5)).toEqual(4);
  });

  test('function division negative return', () => {
    expect(division(-20 ,5)).toEqual(-4);
  });
});
