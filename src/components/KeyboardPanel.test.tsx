import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyboardPanel from './KeyboardPanel';

test('component Header', () => {
  render(<KeyboardPanel />);
  const linkElement = screen.getByText(/React Calculator TDD/i);
  expect(linkElement).toBeInTheDocument();
});
