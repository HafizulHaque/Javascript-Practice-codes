`use strict`;
const cl = arg => console.log(arg);
const alert = cl;

class Rabbit extends Object{
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true