import { fireEvent, render, screen } from '@testing-library/react';
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


test('if the user types in the input, the zoo name should change to whatever they typed', () => {
  render(<AnimalEmoji />);
  const greetingElementAtLoad = screen.getByText(/'welcome to the costa rica zoo' / i);


  const inputEl = screen.getByPlaceholderText('type zoo name here');

  const NEW_NAME = 'my new zoo name';

  fireEvent.change(inputEl, { target: { value : NEW_NAME,
  },
  });

  const greetingElementAfterTyping = screen.getByText(/'welcome to the ${NEW_NAME} zoo'/i);

  expect(greetingElementAfterTyping).toBeInTheDocument();
});

