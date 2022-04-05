import React from 'react';
import {render, screen} from '@testing-library/react';
import {PalgakalkulaatorService} from './PalgakalkulaatorService';

test('renders learn react link', () => {
    const {calculate} = PalgakalkulaatorService();

    expect(calculate(2000)).toBe(1553.51);
    expect(calculate(1)).toBe(0.96);
    expect(calculate(10000)).toBe(7712);
    expect(calculate(9999)).toBe(7711.23);
    expect(calculate(99)).toBe(95.44);
    expect(calculate(123)).toBe(118.57);
    expect(calculate(599)).toBe(561.95);
});