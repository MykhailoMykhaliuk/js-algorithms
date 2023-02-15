export function binarySearch(array, value) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while(array[middlePointer] !== value && leftPointer <= rightPointer) {
    if (value < array[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  if (array[middlePointer] === value) {
    return middlePointer;
  }

  return -1;
}
