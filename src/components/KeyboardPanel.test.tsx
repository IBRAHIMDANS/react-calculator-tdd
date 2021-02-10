import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyboardPanel from './KeyboardPanel';

test('component Header', () => {
  render(<KeyboardPanel />);
  const linkElement = screen.getByText(/CE/i);
  expect(linkElement).toBeInTheDocument();
});
