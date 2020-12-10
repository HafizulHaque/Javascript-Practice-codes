'use strict';
let cl = arg => console.log(arg);

let arr = [1, 2, 3, 4, 5];
for(let item of arr){
  cl(item);
}
cl('----------');
let str = 'I love New York';
for(let char of str){
  cl(char);
}
cl('----------');

// iterable is a concept that makes any object iterable by 'for of' syntex.
// array, string etc. by nature is an iterable, we can make our own object iterable

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator](){
    this.current = this.from;
    return this;
  },
  next(){
    if(this.current <= this.to){
      return {done: false, value: this.current++};
    }else{
      return {done: true};
    }
  }
}

for(let item of range){
  cl(item);
} // ok - works fine

for(let outsideItem of range){
  for(let insideItem of range){
    cl(`${outsideItem} - ${insideItem}`);
  }
} // dont get desired output - as current state is shared.
cl('------------');

let range2 = {
  from: 1, 
  to: 5,
  [Symbol.iterator](){
    return {
      current: this.from,
      until: this.to,
      next(){
        if(this.current <= this.until) return {done: false, value: this.current++};
        else return {done: true};
      }
    }
  }
}

for(let item of range2){
  cl(item);
} // ok - works fine

for(let outsideItem of range2){
  for(let insideItem of range2){
    cl(`${outsideItem} - ${insideItem}`);
  }
} // get desired output as for two nested loops two different object are returned by next()

// Iterable vs ArrayLike
// Arrays are iterable but objects that has numeric key and length property are Arraylike, they are not iterable - by for-of.

let countries = { // array-like, not array
  0: 'Belgium',
  1: 'Brazil',
  2: 'Russia',
  length: 3
};

// for(let country of countries){ - error
//   cl(country);
// }

// convert arraylike to iterable - Array.from()
let countryList = Array.from(countries);
for(let country of countryList){
  cl(country);
}
let squares = Array.from({0:1, 1:2, 2:3, length: 3}, num => num**2); // optional callback function added.
for(let num of squares){
  cl(num);
}
cl('-------------');

let surrogateString = '𝒳😂';

let charList = surrogateString.split(''); // str.split() cant work with surrogate string.
cl(charList); 

charList = Array.from(surrogateString); // Array.from() work fine with surrogate string.
cl(charList);
