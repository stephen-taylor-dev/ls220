"use strict;"

/*
Given a list of numbers,
find two numbers in the list that add up to ten
and return them. If no such pair exists, return null.

It is guaranteed that there is either exactly one pair of numbers
that satisfies the condition, or no pairs at all.

Rules
- find 2 numbers of number that sum to ten
- will only be 1 or 0 pairs

Test Cases:
empyt array
no arg 
first arg not array
other primities in array or objects 
nan, -infinity inifity

Data structure:
array even or odd number of elements
return a new array or null

Algorithm:
find all combinations of 2 elements in the array 
iterate over all the pairs
  check if they sum to 10
  return pair if sum equals
after iteration if no pair found return null


[2, 3, 9, 7]
2,3
2,9
2,8

3,9
3,7

9,7
Helper
findAllPairs
  input array
  returns an array
  intialze a result array
  iterate over each element - 1 (iterate length of array - 1 times)
    iterate from current index + 1 upto end of the array (length of array - 1)
      push a new subyarra [arr[outerloop index], arr[innerloop index]] to rsults array

sum
takes array as argument
returns an integer/number
uses reduce to sum elements in the array


*/

// function findPair(arr) {
//   const pairs = findAllPairs(arr);
//   for (let i = 0; i < pairs.length; i += 1) {
//     let pair = pairs[i];
//     if (sum(pair) === 10) return pair;
//   }

//   return null;
// }

// function findAllPairs(arr) {
//   const result = [];
//   for (let outer = 0; outer < arr.length - 1; outer += 1) {
//     for (let inner = outer + 1; inner < arr.length; inner += 1) {
//       result.push([arr[outer], arr[inner]]);
//     }
//   }

//   return result;
// }

// function sum(arr) {
//   return arr.reduce((sum, num) => sum + num);
// }


function findPair(arr) {
  for (let outer = 0; outer < arr.length - 1; outer += 1) {
    for (let inner = outer + 1; inner < arr.length; inner += 1) {
      if ((arr[outer] + arr[inner]) === 10) return [arr[outer], arr[inner]];
    }
  }

  return null;
}



// General
console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]