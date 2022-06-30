import { render, screen, fireEvent } from '@testing-library/react';
import AnimalEmoji from './AnimalEmoji';
import App from './App';
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

test('if the user clicks on the crocodiles button, there should be one more crocodile on the screen.', () => {
  render(<App />);
  const crocodilesElementsAtLoad = screen.getByText(/crocodilesElementsAtLoad/i);
  expect(crocodilesElementsAtLoad.length).toBeIn(1);

  const crocodilesButton = screen.getAllByText(/Add crocodiles/i);

  fireEvent.click(crocodilesButton);

  const crocodilesElementsAfterClick = screen.
    getAllByText(/🐊/i);

  expect(crocodilesElementsAfterClick.length).toBe(2);
});

