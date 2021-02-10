import { KeyboardList } from './keyboardList';

test('testing keyboard List length', () => {
  expect(KeyboardList).toHaveLength(20)
});

test('testing keyboard List type', () => {
  expect(typeof KeyboardList).toBe("object")
});
