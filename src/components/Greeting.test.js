import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// to test any component we typically do 3 things ( 3 A's) Arrange, Act and Assert the test

describe('test for Greeting Component', () => {
  test('renders hello world as a text', () => {
    // Arrange the component on which the test is required
    render(<Greeting />);

    // Act : execute the test

    // Assert the result of the test.
    const helloElement = screen.getByText('Hello to Greet', { exact: false });

    // now we assert what we get, if the element received is not what we expected, then the test will fail.
    expect(helloElement).toBeInTheDocument();
  });

  test('renders the text element BEFORE the click event', () => {
    render(<Greeting />);

    const textElement = screen.getByText(
      'This component is to greet the people',
      { exact: true }
    );
    expect(textElement).toBeInTheDocument();
  });

  test('other text AFTER the click event', () => {
    //arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button'); // have single button element

    userEvent.click(buttonElement); // Act on click event

    // Assert
    const changedTextElement = screen.getByText(
      'Text has been changed as per your command',
      { exact: true }
    );
    expect(changedTextElement).toBeInTheDocument();
  });

  test('should remove the text element AFTER the click event', () => {
    render(<Greeting />);

    // Act

    const buttonElement = screen.getByRole('button'); // have single button element
    userEvent.click(buttonElement); // Act on click event

    // Assert
    // const textElement = screen.getByText(
    //       'This component is to greet the people',
    //       { exact: true }
    //     );
    //     expect(textElement).not.toBeInTheDocument();

    // OR
    const textElement = screen.queryByText(
      'This component is to greet the people',
      { exact: true }
    );
    expect(textElement).toBeNull();
  });
});
