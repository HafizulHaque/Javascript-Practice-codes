'use strict';
let cl = arg => console.log(arg);
let alert = cl;

// task - 01

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = (salaries) => {
  let total = 0;
  for(let salary of Object.values(salaries)){
    total += salary;
  }
  return total;
}

let startUp = {

}

alert( sumSalaries(salaries) ); // 650
alert( sumSalaries(startUp) ); // 0

// task - 02

let user = {
  name: 'John',
  age: 30
};

function count(obj){
  return Object.keys(obj).length;
}

alert( count(user) ); // 2