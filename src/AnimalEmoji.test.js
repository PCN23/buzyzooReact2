import { render, screen } from '@testing-library/react';
import AnimalEmoji from './AnimalEmoji';
// import App from './App';

test('if we pass a crocodile to AnimalEmoji, it renders a crocodile emoji', () => {
  render(<AnimalEmoji animal='crocodiles'/>);
  const crocodileElement = screen.getByText(/🐊/i);
  expect(crocodileElement).toBeInTheDocument();
});
