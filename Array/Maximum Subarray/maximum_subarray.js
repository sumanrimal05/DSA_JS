function maximum_subarray(arr) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    console.log(`Sum is`, sum);
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

maximum_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
