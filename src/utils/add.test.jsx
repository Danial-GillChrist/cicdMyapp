import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import  Greeting from './add';


test('renders greeting', () => {
  render(<Greeting name="Danial" />);
  expect(screen.getByText('Hello Danial')).toBeInTheDocument();
});