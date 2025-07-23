function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  return mergeSort(leftArray), mergeSort(rightArray);
}

console.log(mergeSort([3, 7, 6, 12, 4, 9]));
