'use strict';
let cl = arg => console.log(arg);

let ucFirst = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

cl(ucFirst('bangladesh'));
cl(ucFirst(''));
cl(ucFirst('b'));

alert( 'Österreich'.localeCompare('Zealand') ); // -1

