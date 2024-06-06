# String Transformation Coding Challenge

## Problem Statement

Given a string, transform it based on certain rules.

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

## Approach

We check the length of the string to determine which transformations to apply based on the given rules.

- If the length is divisible by 15, we first reverse the string and then replace each character with its ASCII code.
- If the length is divisible by 3 but not by 15, we only reverse the string.
- If the length is divisible by 5 but not by 15, we only replace each character with its ASCII code.

## Instructions for Running

This code is written in JavaScript and can be run using Node.js.

To run the code:

go in /challenges run node  transformString.js 





## Test Cases

- Input: "Hamburger" -> Output: "regrubmaH"
- Input: "Pizza" -> Output: "80 105 122 122 97"
- Input: "Chocolate Chip Cookie" -> Output: "eikooCpihCetalocohC"

## Time and Space Complexity

The time complexity of the solution is O(n), where n is the length of the input string. The space complexity is also O(n) due to the creation of new strings.

## Additional Notes

- This solution assumes that the input will always be valid and within the specified constraints.
- We've used built-in JavaScript functions to perform string manipulation and character replacement.


# Contiguous Subarray with Given Sum Coding Challenge

## Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray with the given sum.

Example:
Input: [1, 4, 20, 3, 10, 5], target sum = 33
Output: true (because the subarray [20, 3, 10] has a sum of 33)

## Approach

We'll use a sliding window approach to efficiently find the contiguous subarray with the given sum.

- Initialize two pointers, `start` and `end`, pointing to the start of the array.
- Keep a variable `currentSum` to track the sum of elements between the two pointers.
- While the `end` pointer is less than the length of the array:
  - If `currentSum` equals the target sum, return true.
  - If `currentSum` is less than the target sum, increment the `end` pointer and add the element to `currentSum`.
  - If `currentSum` exceeds the target sum, increment the `start` pointer and subtract the element from `currentSum`.
- If no contiguous subarray with the target sum is found, return false.

## Instructions for Running

This code is written in JavaScript and can be run using Node.js.

To run the code: node hasContiguousSubarrayWithSum





