import { binarySearch } from '../../../src/algorithms/search/binary';

const testArray = [1, 2, 3, 4, 5, 6, 7];

it('Should find the index of the given value', () => {
  expect(binarySearch(testArray, 1)).toEqual(0);
  expect(binarySearch(testArray, 3)).toEqual(2);
  expect(binarySearch(testArray, 7)).toEqual(6);
});

it('Should return -1 if there is no given value', () => {
  expect(binarySearch([testArray], 12)).toEqual(-1);
  expect(binarySearch([], 2)).toEqual(-1);
});
