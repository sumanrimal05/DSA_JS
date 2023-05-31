function get_max_min(arr) {
  let min = 0;
  let max = 0;
  let firstPointer = 0;
  let secondPointer = 0;

  while (secondPointer < arr.length - 1) {
    secondPointer = firstPointer + 1;

    if (arr[firstPointer] <= arr[secondPointer]) {
      min = arr[firstPointer];
      max = arr[secondPointer];
    } else {
      min = arr[secondPointer];
      max = arr[firstPointer];
    }
    firstPointer++;
  }

  console.log(`Minimum element is:`, min);
  console.log(`Maximum element is:`, max);
}

get_max_min([22, 14, 8, 17, 35, 3]);
