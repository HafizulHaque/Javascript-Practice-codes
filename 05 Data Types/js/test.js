'use strict';
let cl = arg => console.log(arg);

let myObject = {
  name: 'Oliver Kahn',
  age: 48,
  [Symbol.iterator](){
    this.current = this.name;
    return this;
  },
  next(){
    if(this.current==this.name){
      this.current = this.age;
      return {done: false, value: this.name};
    }else if(this.current==this.age){
      return {done: false, value: this.age};
    }else{
      return {done: true};
    }
  }
}

let myArray = Array.from(myObject);

cl( myArray );