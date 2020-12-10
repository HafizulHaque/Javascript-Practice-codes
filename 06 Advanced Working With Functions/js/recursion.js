'use strict';
let cl = arg => console.log(arg);

// recursion to get pow(x, n);

function pow(x, n){
  if(n == 0) return 1; // base case
  else if(n < 0) return pow(x, n+1)/x; // recursive step
  else if(n > 0) return pow(x, n-1)*x; // recursive step
}

cl(pow(2, 0)); // 0
cl(pow(2, -2)); // 0.25
cl(pow(2, 3)); // 8

// recursion depth is limited by javascript engine - we can rely on it being 10000.
// we can rewrite every recursion with loop. loop variant is less memory consuming.
// recursion code is shorter, recursion is used when optimization is not required.

// Practical use of recursion

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function sumSalaries(dept){
  //base case
  if(Array.isArray(dept)){
    return dept.reduce((sumSalary, currentEmployee) => sumSalary+currentEmployee.salary, 0);
  }

  let totalSalary = 0;
  for(let subdept of Object.values(dept)){
    totalSalary += sumSalaries(subdept); // recursive call
  }
  return totalSalary;
}

cl(sumSalaries(company)); // 7700

// Implement a linked-list with object 

let linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

cl(JSON.stringify(linkedList));
// prepend an element
let item = {value: 0, next: linkedList};
linkedList = item;
cl(JSON.stringify(linkedList));


// Fibonacci
let fibonacciMemory = {};

function fib(n){
  // optimization
  if(fibonacciMemory[n]){
    return fibonacciMemory[n];
  }
  //base case
  if(n < 1) return 0;
  else if(n == 1) return 1;
  // recursive step
  else{
    fibonacciMemory[n-2] = fib(n-2);
    fibonacciMemory[n-1] = fib(n-1);
    return fib(n-1) + fib(n-2);
  }
}

cl(fib(3)); // 2
cl(fib(7)); // 13
cl(fib(77)); // 5527939700884757


// TASK 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// linked list traversal recursion variant  
cl(`----------------------------`);
let printList = (list) => {
  if(list == null) return;
  cl(list.value);
  printList(list.next);
}

printList(list);

// linked list traversal loop variant
cl(`---------------------------`);
printList = (list) => {
  let current = list;
  while(current != null){
    cl(current.value);
    current = current.next;
  }
}

printList(list);

// linked list reverse traversal recursion variant  
cl(`----------------------------`);
printList = (list) => {
  if(list == null) return;
  printList(list.next);
  cl(list.value);
}

printList(list);

// linked list reverse traversal loop variant
cl(`---------------------------`);
printList = (list) => {
  let current = list;
  let stack = [];
  while(current != null){
    stack.push(current.value);
    current = current.next;
  }
  while(stack.length != 0){
    cl(stack.pop());
  }
}

printList(list);