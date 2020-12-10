'use strict';
let cl = arg => console.log(arg)
let alert = cl;

function func({
  a:{
    b = 2,
    c = 3
  }
}){
  cl(b);
  cl(c);
}

func({a: {}});

//test 1

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//test 2

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let salaries2 = {};

function topSalary(salaries){
  let maxSalary = 0;
  let maxName = null;
  for(let [name, salary] of Object.entries(salaries)){
    if(salary > maxSalary){
      maxSalary = salary;
      maxName = name;
    }
  }
  cl(maxName);
}

topSalary(salaries);
topSalary(salaries2);