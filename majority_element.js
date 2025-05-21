/*

Given an array of numbers, return its majority element.

The majority element is the value in the array that appears
as at least half of the elements in the array.

It is guaranteed that only one majority element exists in the array.


Problem
Input: array
Output: integer


Rules:
- empty array
- alwasy an array
- no arg
- sparse arrya
- what data types will elements

Test Cases / Examples:


Data structure:
hash


Algorithm:
intialze count object hash
for each element in the input array
  check if the element is a key in the hash
    if so increment value by 1
  else if not in the hash
    use current element as key with value of 1
  if value of the key is > = lenght of input arrray / 2
    return the key

*/ 

function findMajority(arr) {
  const elementCounts = {};
  let half = Math.ceil(arr.length / 2);
  
  for (let idx = 0; idx < arr.length; idx += 1) {
    let el = arr[idx];
    if (elementCounts.hasOwnProperty(el)) {
      elementCounts[el] += 1;
    } else {
      elementCounts[el] = 1;
    }
    if (elementCounts[el] >= half) return el;
  }
}


console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);