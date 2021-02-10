import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('component Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/React Calculator TDD/i);
  expect(linkElement).toBeInTheDocument();
});
