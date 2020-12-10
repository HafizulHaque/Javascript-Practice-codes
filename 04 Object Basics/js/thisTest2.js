'use strict';

let calculator = {
  read(){
    this.a = +prompt('Enter first number', 0);
    this.b = +prompt('Enter second number', 0);
  },
  sum(){
    return `Sum : ${this.a+this.b}`;
  },
  mul(){
    return `Product : ${this.a*this.b}`;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

