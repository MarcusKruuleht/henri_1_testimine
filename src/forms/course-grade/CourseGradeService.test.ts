import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  expect(calculate(25, 25, 25)).toBe('failed');
  expect(calculate(0, 30, 46)).toBe('failed');
  expect(calculate(50, 20, 20)).toBe('failed');
  expect(calculate(33, 33, 33)).toBe('satisfactory');
  expect(calculate(26, 26, 48)).toBe('satisfactory');
  expect(calculate(25, 25, 26)).toBe('satisfactory');
  expect(calculate(40, 40, 45)).toBe('good');
  expect(calculate(34, 33, 34)).toBe('good');
  expect(calculate(50, 50, 50)).toBe('very good');
  expect(calculate(42, 42, 42)).toBe('very good');
  // Add some tests (at least 2-3 tests per grade)
});
