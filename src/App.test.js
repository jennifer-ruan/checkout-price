import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';
import Cart from './components/Cart.js';
import Main from './components/Main.js';

/* RENDERING TESTS */

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

//Tests if the app renders items
test('renders items', () => {
  const { getByText } = render(<App />);
  const text = getByText('ground beef');
  expect(text).toBeInTheDocument();
});

//Tests if Main initializes with the correct state
test('correctly initializes state', () => {
  const { getByText } = render(<Main />);
  expect({ getByText }.initialState.toEqual({ items: [] }))
})

/* CART TESTS */

//Tests if Cart initializes displaying the correct information
test('initializes with $0 price', () => {
  let testItems = [];
  const { getByText } = render(<Cart items={testItems} />);
  const text = getByText('Total: $0')
  expect(text).toBeInTheDocument();
})

//Test if Cart displays items correctly
test('counts items correctly', () => {
  let testItems = [[1, 1], [3, 2]];
  const { getByText } = render(<Cart items={testItems}/>)
  const text = getByText('4 items in cart')
  expect(text).toBeInTheDocument();
})