'use strict';
let cl = arg => console.log(arg);

function makeCount(){
  let count = 0;

  return function(){
    return count++;
  }
}

let counter = makeCount(); // counter and counter2 are two different instance.
let counter2 = makeCount();
cl(counter());
cl(counter());
cl(counter());
cl(counter2());
cl(counter2());
cl(counter2());

// Task -01

function sum(a){
  return function(b){
    return a+b;
  }
}

cl( sum(1)(2)  )  //= 3
cl( sum(5)(-1) )  // = 4

// Task - 02

/* .. your code for inBetween and inArray */

function inBetween(a, b){
  return function(x){
    return x >= a && x <= b;
  }
}

function inArray(arr){
  return function(x){
    return arr.includes(x);
  }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

cl( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

cl( arr.filter(inArray([1, 2, 10])) ); // 1,2


// Task - 03

function byField(propName){
  return function(obj1, obj2){
    return obj1[propName] > obj2[propName] ? 1 : -1;
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

cl( users.sort(byField('name')) );
cl( users.sort(byField('age')) );
cl( users.sort(byField('surname')) );

// Task - 03
cl(`---------------------Task-03: Shooters--------------------------`);

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // create a shooter function,
      cl( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();
// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.