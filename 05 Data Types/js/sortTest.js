'use strict';
let cl = arg => console.log(arg);
let alert = cl;

let arr = [1, 6, 3];

function sortArr(arr){
  return arr.sort();
}

let res = sortArr(arr);
cl(res);
cl(arr); // call by reference - so both are same array and both are sorted.

arr = [100, 200, 300];
[arr[0], arr[2]] = [arr[2], arr[0]];
cl(arr);