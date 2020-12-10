'use strict';

function Accumulator(val){
  this.val = val;
  this.read = () => {
    this.val += +prompt('Enter a Number', '0');
    return this;
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.val); // shows the sum of these values
