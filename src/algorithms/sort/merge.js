export function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const middlePointer = Math.floor(array.length / 2);
  const leftPart = array.slice(0, middlePointer);
  const rightPart = array.slice(middlePointer);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(leftPart, rightPart) {
  let result = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while(leftPointer < leftPart.length && rightPointer < rightPart.length) {
    if (leftPart[leftPointer] < rightPart[rightPointer]) {
      result.push(leftPart[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightPart[rightPointer]);
      rightPointer++;
    }
  }

  return [...result, ...leftPart.slice(leftPointer), ...rightPart.slice(rightPointer)];
}
