function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const newArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      newArray.push(leftArray.shift());
    } else {
      newArray.push(rightArray.shift());
    }
  }
  return [...newArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([3, 7, 6, 12, 4, 9]));
