import { selectionSort } from '../../../src';

test('Should sort the array in ascending order', () => {
  expect(selectionSort([3, 6, 4, 1, 7])).toEqual([1, 3, 4, 6, 7]);
});