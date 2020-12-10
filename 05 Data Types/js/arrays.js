'use strict';
let cl = arg => console.log(arg);

// arrays are mutable

let arr = ['apple', 'orange', 'pulm'];
arr[1] = 'mangoo'; // example of mutablity of array

cl(arr);
cl(typeof arr);


// array can store mixed different type of items
arr = [2, 2.34, 'apple', true, {name: 'john', age: 45}, function(){cl("hello world")}, () => {cl('also hello')}];

cl(arr);
cl(arr[2][1]);
cl(arr[4].name);
arr[5]();
arr[6]();

// array as <stack> - operation  push and pop 

arr = [1, 2, 4, 8, 16];
cl(arr);
arr.push(32);
cl(arr);
arr.pop();
cl(arr);

// array as <queue> - operation push and shift and unshift

arr = [1, 2, 4, 8, 16];
cl(arr);
arr.push(32);
cl(arr);
let x = arr.shift();
cl(arr);
x = arr.unshift(x);
cl(arr);
cl(x);

// we can unshift & push multiple elements 

arr = [3, 4];
cl(arr);
arr.unshift(1, 2);
cl(arr);
arr.push(5, 6);
cl(arr);

// array is special kind of object - so they are copied by reference 
arr = [1, 2, 3];
let arr2 = arr; // copied by reference
cl(arr);
cl(arr2);
arr.push(4);
cl(arr); // both arr & arr2 changed.
cl(arr2);

// array internals and misuse to reduce performance of array
// array items are stored at contigious area of memory so they are fast 
arr = [1, 2, 3];
// but misuse like -
// 01. add a non numeric property
arr.name = 'Ifad';
cl(arr);
// 02. assign property with far more than it's length 
arr[999] = 65;
cl(arr);
// 03. fill an array in backward order
arr[300] = 'apple';
arr[299] = 'peach';
cl(arr);

// as array are objects in it's base. so we can do these tasks. but array are optimized in performance to work as an ordered object in contigious memory area. if we break them, all optimizations are lost.

// methods that add elements at first of the array(shift/unshift) are slow than the methods that works with elements at the last (push/pop)


// array iterations 
arr = ['apple', 'orange', 'pulm'];

for(let fruit of arr){ // for of - returns items
  cl(fruit);
}

for(let key in arr){ // for in - return index
  cl(arr[key]);
}

// better not to use 'for in' as it is 10~100 times slower. 'for of' is optimized for array. use 'for of'


// arr.length return largest index assigned+1 not actual number of elements
arr = [1, 2, 3];
arr[99] = '34';
cl(arr);
cl(arr.length); // 100

// arr.length is writable - if we decrease it , array get truncated, not reversable process

arr = [1, 2, 3, 4, 5];
cl(arr);
cl(arr.length);

arr.length = 10; // array length increased - no problem
cl(arr);
cl(arr.length);

arr.length = 5; // back to previous

arr.length = 2; // array length decreased - array got truncated - irreversable
cl(arr);
cl(arr.length);

arr.length = 5; // 3 elements got lost
cl(arr);
cl(arr.length);


// new Array() - syntax
arr = [ 1, 2 ];
arr.length = 10;

cl(arr[0]);
cl(arr[6]);

arr = new Array(3);
cl(arr[0]);
cl(arr.length);

// multidimentional array

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

cl(arr[1][1]);
cl(arr[2][1]);


// toString() method - returns comma seperated string of items

cl(arr.toString());
arr = [1, 2, 'apple'];
cl(arr.toString());

// don't compare array with == . they give strange result - rather for eqality test  - compare item by item.

cl([] == []);
cl([0] == [0]); // false as their reference are different

cl(0 == []); // strangely they are equal as array to primitive conversion gives strange output
cl('0' == []); // again this is false :( !!!