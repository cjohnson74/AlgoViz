import { render, screen } from '@testing-library/react';
import { mergeSort } from './sortingAlgorithms/sortingAlgorithms'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('merge sort functions properly', () => {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomIntFromInterval(5, 750));
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  const mergeSortedArray = mergeSort(array);
  expect(mergeSortedArray).toEqual(javaScriptSortedArray);
})
