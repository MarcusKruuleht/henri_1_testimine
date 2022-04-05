import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(45, 59)).toBe(29);
  expect(calculate(61, 30)).toBe(30);
  expect(calculate(59, 30)).toBe(29);
  expect(calculate(17, 31)).toBe(27);
  expect(calculate(100, 30)).toBe(30);
  expect(calculate(52, 11)).toBe(24);
  expect(calculate(9, 0)).toBe(27);
  expect(calculate(24, 4)).toBe(22);
  expect(calculate(101, 67)).toBe(30);
  expect(calculate(33, 11)).toBe(22);
});
