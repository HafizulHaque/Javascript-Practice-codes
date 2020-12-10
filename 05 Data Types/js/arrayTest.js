'use strict';

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();


// function getMaxSubSum(arr){
//   let temp = 0;
//   let max = 0;
//   for(let i = 0; i < arr.length; i++){
//     temp = 0;
//     for(let j = i; j < arr.length; j++){
//       temp += arr[j];
//       max = Math.max(temp, max);
//     }
//   }
//   console.log(max);
// }


function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for(let item of arr){
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if(partialSum < 0){
      partialSum = 0;
    }
  }
  console.log(maxSum);
}

getMaxSubSum([-1, 2, 3, -9])// == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9])// == 6
getMaxSubSum([-1, 2, 3, -9, 11])// == 11
getMaxSubSum([-2, -1, 1, 2])// == 3
getMaxSubSum([100, -9, 2, -3, 5])// == 100
getMaxSubSum([1, 2, 3])// == 6 (take all)