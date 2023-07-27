import { roundResult } from './UniteTests';
import { checkStatus } from './UniteTests';

test('roundResult function should return rounded value (2 digits after coma)', () => {
  expect(roundResult(12.3456)).toBe('12.35');
  expect(roundResult(12.3426)).toBe('12.34');
});

test('check Status function should return negative status', () => {
  expect(checkStatus(false)).toBeTruthy();
  expect(checkStatus(true)).toBeFalsy();
});
