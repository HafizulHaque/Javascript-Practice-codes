`use strict`;
let cl = arg => console.log(arg);

//Caching Decorator

let double = (x) => {
  cl(`function ran with argument ${x}`);
  // do some heavy calculation here
  return x*2;
}

let triple = (x) => {
  cl(`function ran with argument ${x}`);
  // do some heavy calculation here
  return x*3;
}

// this function act as a wrapper function for caching - wrapper function
let cachingDecoratorFunc = (func) => {
  let cache = new Map();
  return function(x){
    if(cache.has(x)){
      cl(`found on cache for argument ${x}`);
      return cache.get(x);
    }else{
      result = func.call(this, x);
      cache.set(x, result);
      return result;
    }
  }
}


let doubled = cachingDecoratorFunc(double); // these two has different cache
let tripled = cachingDecoratorFunc(triple);

cl(doubled(2));
cl(doubled(3));
cl(doubled(4));
cl(doubled(2));
cl(doubled(5));
cl(doubled(3));
cl(tripled(2));
cl(tripled(3));
cl(tripled(4));
cl(tripled(5));
cl(tripled(2));
cl(tripled(3));

// func.call for the context

let arshad = {
  name: 'Arshad Kabir'
}
let Jenny = {
  name: 'Jennifer Lopez'
}

function sayName(greet){
  cl(`${greet} ${this.name}`);
}

sayName.call(arshad, 'Hello');
sayName.call(Jenny, 'Ola');

// context using decorating

let worker1 = {
  name: 'Jamal Bhuiyan',
  sayGreet(greet){
    cl(`${greet}, ${this.name}!`);
  }
}
let worker2 = {
  name: 'Maruf Parvez',
  sayGreet(greet){
    cl(`${greet}, ${this.name}!`);
  }
}

worker1.sayGreet('hello');
function call(func, greet='hello'){
  func.call(worker2, greet);
}
call(worker1.sayGreet);

// passing with all parameters along with context is called call-forwarding

let number = {
  value: 5,
  xTimed(x){
    return (this.value * x);
  }
}

number.xTimed = cachingDecoratorFunc(number.xTimed);
cl(number.xTimed(3));

// wrapping function works fine except one case, if the function that is wrapped has function propperties, the wrapper function doesn't provide them. So if a function uses function property we should not wrap them with wrapper function.