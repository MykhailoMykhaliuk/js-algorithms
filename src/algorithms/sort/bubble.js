import { swap } from '../../utils';

export function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
};