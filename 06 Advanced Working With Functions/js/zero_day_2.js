`use strict`;
let cl = (arg) => console.log(arg);

let times = [];
let start = Date.now();

setTimeout(run = ()=>{
  times.push(Date.now()-start);
  if((Date.now()-start) > 100) cl(times);
  else setTimeout(run);
});

// For setInterval() or nested SetTimeout(), when called with zero time delay, first four calls remain at zero delay. but later calls are forced to have delay time of at least 4 ms. This feature is browser specific. server side javascript (e.g. Node.js) don't have such feature.

