function findSubarrayWithSum(arr, targetSum) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > targetSum && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === targetSum) {
      return arr.slice(start, end + 1); // Return the subarray
    }
  }

  return []; // Return an empty array if no such subarray is found
}

const arr = [1, 2, 3, 7, 5];
const targetSum = 40;
console.log(findSubarrayWithSum(arr, targetSum)); // Output: [2, 3, 7]
