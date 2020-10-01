import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';
import Cart from './components/Cart.js';
import ItemsView from './components/ItemsView.js';
import Main from './components/Main.js';

//Tests if the app renders at all (ie. displays "Groceries")
test('renders app', () => {
  const { getByText } = render(<App />);
  const text = getByText('Groceries');
  expect(text).toBeInTheDocument();
});

//Tests if the app renders the cart (ie. displays "Cart")
test('renders cart', () => {
  const { getByText } = render(<App />);
  const text = getByText('Cart');
  expect(text).toBeInTheDocument();
});