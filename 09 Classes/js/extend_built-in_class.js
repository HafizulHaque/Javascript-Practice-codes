`use strict`;
const cl = arg => console.log(arg);

class ProArray extends Array{ // extending built in Array class
  constructor(...args){
    super();
    for(let item of args){
      this.push(item);
    }
  }
  isEmpty(){
    return this.length==0;
  }

  //built-in methods will use this as a constructor
  // static get [Symbol.species](){ //set this to return Array after applying filter, map etc Array Methods
  //   return Array;
  // }
}

let arr = new ProArray(1, 2, 3, 4, 5, 6);
cl(arr);
cl( arr.isEmpty() );

arr = arr.map(item=>item*2);
cl(arr);
cl( arr.isEmpty() ) // still returns ProArray after applying map

arr = arr.filter(item => item>=10);
cl(arr);
cl( arr.isEmpty() ) // still returns ProArray after applying filter

//Unlike user-defined class, built-in classes only inherit non-static properties, not static ones.