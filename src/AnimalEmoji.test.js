import { render, screen } from '@testing-library/react';
import App from './App';

test('if we pass a crocodile to AnimalEmoji, it renders a crocodile emoji', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add crocodiles/i);
  expect(linkElement).toBeInTheDocument();
});
