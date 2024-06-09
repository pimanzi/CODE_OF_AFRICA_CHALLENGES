# Array Manipulation Challenge

## Description

This repository contains a JavaScript function for the Array Manipulation Challenge. The challenge is to determine if there exists a contiguous subarray within a given array that sums up to a specific target value.

## Functionality

The `arrayManipulation` function takes an array and a target value as input and returns true if there exists a contiguous subarray within the array that sums up to the target value. Otherwise, it returns false.

## How to Use

To use the `arrayManipulation` function, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/array-manipulation-challenge.git
   
2. Navigate to the directory of the cloned repository:

   ```
   cd array-manipulation-challenge
   ```

3. Open the arrayManipulation.js file in your preferred text editor or IDE.

4. Install Node if it is not currently available

   <mark> Feel Free to check the documentation of Node to download it perfectly acoording to your operating system </mark>
   Check out this [Documentation](https://nodejs.org/en)

5. Use the function arrayManipulation(array, target) where array is the array you want to manipulate and target is the specific sum you are looking for.
6. Run this code

   ```
   node arrayManipulation.js
    ```
## Examples Usage

> const result1 = arrayManipulation([1, 4, 6, 8], 10);
> console.log(result1); // Output: true (since 4 + 6 = 10)

> const result2 = arrayManipulation([1, 2, 3, 4, 5], 9);
> console.log(result2); // Output: true (since 2 + 3 + 4 = 9)

> const result3 = arrayManipulation([10, 20, 30], 15);
> console.log(result3); // Output: false (no contiguous subarray sums up to 15)




   
