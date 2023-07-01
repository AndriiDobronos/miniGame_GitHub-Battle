import { render, screen } from '@testing-library/react';
import AppCopy from './App.copy';

test('renders learn react link', () => {
  render(<AppCopy />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
