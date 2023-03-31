import { render, screen } from '@testing-library/react';
import App from './App';

import calculateContribution from './calculateContribution'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Beat Card/i);
  expect(linkElement).toBeInTheDocument();
});

it('Should return at `Bon Appetit` text', () => {
  const content = `4 1
  3 10 2 9
  7
  `

  const message = calculateContribution(content)

  expect(message).toBe('Bon Appetit')
})

it('Should return at `5` text', () => {
  const content = `4 1
  3 10 2 9
  12
  `

  const message = calculateContribution(content)

  expect(message).toBe('5')
})
