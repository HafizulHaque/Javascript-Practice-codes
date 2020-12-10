'use strict';
let cl = arg => console.log(arg);

function getDiff(d1, d2){
  return d1-d2;
}

function getDiff2(d1, d2){
  return d1.getTime()-d2.getTime();
}

// benchMark function
function benchMark(f){
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for(let i = 0; i < 100000; i++) f(date2, date1);
  let end = Date.now();
  return end-start;
}

//Test result
let t1, t2;
t1 = t2 = 0;

// modern js engine only apply optimizations to hot code(that run multiple time). so we need heat-up run before count performance
benchMark(getDiff);
benchMark(getDiff2); // heat-up run

for(let i = 0; i < 20; i++){ // performance test - confirmed through running multiple times
  t1 += benchMark(getDiff);
  t2 += benchMark(getDiff2);
}

cl(t1);
cl(t2); // show outpur

// Benchmark need to run multiple times to confirm the result ***** important