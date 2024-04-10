// import necessary react testing library helpers here
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const clickIncrement = screen.getByText('+');
  fireEvent.click(clickIncrement);

  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const clickDecrement = screen.getByText('-');
  fireEvent.click(clickDecrement);

  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('-1');
});
