import { bubbleSort } from '../../../src';

test('Should sort the array in ascending order', () => {
  expect(bubbleSort([3, 6, 1, 7])).toEqual([1., 3, 6, 7]);
});