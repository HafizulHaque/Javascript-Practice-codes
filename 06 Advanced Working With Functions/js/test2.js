`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  },

  maxMin(max, min){
    cl(`called with ${max}, ${min}`);
    return max+min;
  },

  lowest(a, b, c, d, e){
    return Math.min(a, b, c, d, e);
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if (cache.has(key)) {
      cl(`found in cache for key ${key}`);
      return cache.get(key);
    }
    // let result = func.call(this, ...arguments); // func.call() work for iterable
    let result = func.apply(this, arguments); // func.apply() work for arraylike only
    cache.set(key, result);
    return result;
  };
};

function hash(){
  return [].join.call(arguments);// method borrowing
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // works
alert( worker.slow(2) ); // works, doesn't call the original (cached)


worker.maxMin = cachingDecorator(worker.maxMin);
cl(worker.maxMin(2, 5));
cl(worker.maxMin(5, 2));
cl(worker.maxMin(2, 5));

worker.lowest = cachingDecorator(worker.lowest);
cl(worker.lowest(1, 5, 2, -2, 2));
cl(worker.lowest(1,   5, 2, -2, 2));

