import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const title = getByText('Groceries');
  expect(title).toBeInTheDocument();
});