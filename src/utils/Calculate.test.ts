import { sum } from './Calculate';

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

