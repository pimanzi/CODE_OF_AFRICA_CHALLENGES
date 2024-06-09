/**
 * Checks if there exists a contiguous subarray that sums up to the target value.
 *
 * @param {number[]} array - The array to be manipulated.
 * @param {number} target - The target sum for the contiguous subarray.
 * @returns {boolean|string} - Returns true if such subarray exists, false otherwise, or an error message for invalid input.
 */
function hasContiguousSubarrayWithSum(array = [], target = 0) {
  // Check if input is a valid array
  if (!Array.isArray(array)) {
    return 'Please provide an array to manipulate';
  }
  let length = array.length;

  // Check if the array length is within valid bounds
  if (length < 1 || length > 1000000) {
    return 'The length of your array is invalid';
  }

  // Check if the array values are within the valid range
  let minValue = Math.min(...array);
  let maxValue = Math.max(...array);
  if (minValue < -1000000000 || maxValue > 1000000000) {
    return 'Your array has values outside the valid range';
  }

  // check if target is within the valid range

  if (target < -1000000000 && target > 1000000000) {
    return 'Your target is out of limits';
  }

  // Check for the contiguous subarray that sums up to the target

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < length; j++) {
      sum += array[j];
      if (sum === target) {
        return true;
      }
    }
  }

  return false;
}
