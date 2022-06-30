import { render, screen } from '@testing-library/react';
import AnimalEmoji from './AnimalEmoji';
// import App from './App';

// unit test
test('if we pass a crocodile to AnimalEmoji, it renders a crocodile emoji', () => {
  render(<AnimalEmoji animal='crocodiles'/>);
  const crocodileElement = screen.getByText(/🐊/i);
  expect(crocodileElement).toBeInTheDocument();
});

test('if we pass a invalid animal to AnimalEmoji, it should render an empty div', () => {
  render(<AnimalEmoji animal='deer'/>);
  const crocodileElement = screen.queryByText('🐊');
  expect(crocodileElement).not.toBeInTheDocument();
});
