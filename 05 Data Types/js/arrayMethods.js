'use strict';
let cl = arg => console.log(arg);

let arr = ['apple', 'peach', 'pulm'];

// delete 
delete arr[1];
cl(arr);
cl(arr[1]); // undefined
cl(arr.length); // length unchanged

// arr.splice
arr = ['apple', 'orange', 'peach', 'pulm'];
arr.splice(1, 5); //1st arg = starting index , 2nd arg - item delete count
cl(arr);

arr = ['I', 'go', 'to', 'school'];
arr.splice(1, 0, 'don\'t');
cl(arr);

arr = ['the', 'name', 'of', 'author', 'of', 'this', 'book', 'is', 'Morris Mano'];
arr.splice(1, 6, 'person', 'before', 'you');
cl(arr);

// negetive index also allowed

arr = [1, 2, 3];
arr.splice(-1, 0, 2.5, 2.75);
cl(arr);


// arr.slice() - copy a certain portion of an array
arr = [1, 2, 3, 4, 5, 6];
cl(arr.slice(1, 4));
cl(arr.slice(2));
cl(arr.slice(-2));


// arr.concat()

arr = [1, 2];
cl( arr.concat([3, 4, 5], 'apple', []) );

arr = [1, 2];

let arrayLike = {
  name: 'Mike',
  age: 30
}

arr = arr.concat(arrayLike);
cl(arr);
cl(arr[2].name);

arr = [1, 2];

let anotherArrayLike = {
  name: 'Collin',
  age: 34,
  0: 80,
  1: 76,
  [Symbol.isConcatSpreadable]: true,
  length: 2
}

arr = arr.concat(anotherArrayLike);
cl(arr);

// forEach iteration
arr = ['apple', 'orange', 'peach'];

arr.forEach((item, index, array) => { // forEach takes an callback function as argument
  cl(`${item} is at position ${index} of array [${array}]`);
})

arr.forEach(cl); // cl function is the callback function

// search in an array
arr = [1, 2, 3, 4, 5, 2, 1];

cl(arr.indexOf(3)); // return first pos, if not found -1 is returned.
cl(arr.lastIndexOf(2)); // return last pos, otherwise -1 if not found.
cl(arr.includes(3)); // return true if found.

//indexOf() dont work for NaN as === is performed internally. in this case includes() works fine
arr = [1, 0, null, NaN];
cl(arr.indexOf(NaN));
cl(arr.includes(NaN));


// finding from array of objects
arr = [
  {
    id: 1,
    user: 'John',
    age: 40
  },
  {
    id: 2,
    user: 'Rob',
    age: 38
  },
  {
    id: 3,
    user: 'Arya',
    age: 20
  }
];

// arr.find()
let val = arr.find(item => item.user =='Rob');
cl(val); // if found, object is returned

val = arr.find((item, index, array) => {
  return index<2 && item.age==20;
})
cl(val); // if not found , undefined is returned


// arr.findIndex
val = arr.findIndex(item => item.user =='Rob');
cl(val); // if found, index is returned

val = arr.findIndex((item, index, array) => {
  return index<2 && item.age==20;
})
cl(val); // if not found , -1 is returned


// arr.filter() same as arr.find() but return array of all matching objects
let res = arr.filter((item) => {
  return item.age > 20;
})
cl(res);

// transformation of an array

arr = [
  {
    id: 1,
    user: 'John',
    age: 40
  },
  {
    id: 2,
    user: 'Rob',
    age: 38
  },
  {
    id: 3,
    user: 'Arya',
    age: 20
  }
];

// arr.map()
let users = arr.map(item => item.user);
let ids = arr.map(item => item.id);
cl(users);
cl(ids);

//arr.sort()

arr = [0, -1, 4, 15, -3, 6];
arr.sort();
cl(arr); // strange - items are compared as string so '15' < '4'

// supply compare function as argument
arr = [0, -1, 4, 15, -3, 6];
arr.sort((a, b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  if(a == 0) return 0;
})
cl(arr);

arr = [0, -1, 4, 15, -3, 6];
arr.sort((a, b) => {
  if(a > b) return -1;
  if(a < b) return 1;
  if(a == 0) return 0;
})
cl(arr);

// sort array of objects
arr = [
  {
    id: 1,
    user: 'John',
    age: 40
  },
  {
    id: 2,
    user: 'Rob',
    age: 38
  },
  {
    id: 3,
    user: 'Arya',
    age: 20
  }
];
cl(arr);
arr.sort((obj1, obj2) => {
  if(obj1.age < obj2.age) return -1; 
  if(obj1.age > obj2.age) return 1; 
  if(obj1.age == obj2.age) return 0; 
});
cl(arr);

// split & join

let str = 'Selim-Jamal-Karim-Salman';
let names = str.split('-');
cl(names);
str = '34.34, 87.98, 87, 78';
let marks = str.split(', ')
               .map(mark => Number(mark));
cl(marks);

let name = 'Mina Belluci';
cl(typeof name == 'string');
let letters = name.split('')
                  .forEach(cl); // cl is the callback function

marks = [23, 76, 98, 23, 78];
str = marks.join(' ~ ');
cl(str);

// arr.reduce - used to iterate a array and return a single value based on that array


marks = [23, 76, 98, 23, 78];
let sum = marks.reduce((sum, current) => { // return sum of numbers;
  cl(current);
  return sum+current;
}, 0);
cl(sum);

arr = ['Ishrak', 56, 3.8, 'Naina', 'Kabir', true, null, undefined, {0: 78, 1: 7}, [45, 34, 98], 'Sikha'];
let strCnt = arr.reduce((count, item) => { // return number of strings
  return (typeof item)== 'string' ? count+1 : count;
}, 0);
cl(strCnt);

// if initial value not given, first item in the array are considered to be the initial value and iteration starts from the second value.

marks = [23, 76, 98, 23, 78];
sum = marks.reduce((sum, current) => { // return sum of numbers;
  cl(current);
  return sum+current;
}); // see 23 not iterated, rather taken as initial value and iteration started from 2nd item
cl(sum);

names = ['Hafiz', 'ibn', 'Feroz'];
let reverseName = names.reduceRight((name, namePart) => `${name} ${namePart}`);
cl(reverseName); // iterated from right by arr.reduceRight

// Array type check

// Array is kind of object so typeof array returns object 
cl( typeof({}) ); // returns object
cl( typeof([]) ); // this too returns object

//differentiate array from regular object type
cl(Array.isArray({})); //false
cl(Array.isArray([])); // true


// thisArg example
let army = {
  minAge: 18,
  maxAge: 30,
  canJoin: function(user){
    return user.age >= this.minAge && user.age <= this.maxAge;
  }
}

let applicants = [
  {
    name: 'Kamal Khan',
    age: 16
  },
  {
    name: 'Mustak Ahmed',
    age: 25
  },
  {
    name: 'Ziaur Rahman',
    age: 41
  },
  {
    name: 'A.K. Khondokar',
    age: 18
  }
];

let soilders = applicants.filter(applicant => army.canJoin(applicant)); // 1st way
cl(soilders);
soilders = applicants.filter(army.canJoin, army); // 2nd way - providing thisArg(army) argument
cl(soilders);

