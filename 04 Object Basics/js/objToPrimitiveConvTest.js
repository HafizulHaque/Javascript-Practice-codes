'use strict';
let cl = arg => console.log(arg);

let item = {
  name: 'Aaron',
  age: 23,

  [Symbol.toPrimitive](hint){ // first this method is fetched in case of object to primitive conversion
    if(hint=='string'){ // Symbol.toPrimitive is a system symbol
      return this.name;
    }else if(hint=='number'){
      return this.age;
    }else if(hint=='default'){
      return this.age;
    }
    //must return primitive type.
  },

  // toString(){ // if above not found, if hint == string this method is fetched, if not found then valueOf - by default return '[object object]' string
  //   return this.name;
  // },
  // valueOf(){ // if above not found, if hint == number this method is fetched, if not found then toString - by default return the object itself
  //   return this.age;
  // }
}

let item2 = {};

// object to string conversion 
alert(item);
item2[item] = 123;
cl(item2[item]);
cl(item2);
let str = String(item);
cl(str);

// object to number conversion
let num = Number(item);
cl(num)
let num2 = +item;
cl(num2)
let num3 = item-3;
cl(num3)
let val = item > 4;
cl(val)

//object to default conversion
let num4 = item+5;
cl(num4);
let val2 = item==1;
cl(val2);

//no boolean hint available as all objects (non-empty or empty) are considered to be true
