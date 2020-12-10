`use strict`;
let cl = arg => console.log(arg);

let start = Date.now();
let cancelId = setInterval(func = ()=>{
  if((Date.now()-start)>5000){
    clearInterval(cancelId);
  }
  cl(`called at ${Date.now()-start}`);
}, 1000);

setTimeout(()=>{
  clearInterval(cancelId);
}, 1700);