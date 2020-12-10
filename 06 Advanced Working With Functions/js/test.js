`use strict`;
let cl = arg => console.log(arg);

let yes = 0;
let no = 0;

let cancelId = setInterval(()=>{
  let isTrue = confirm(`Let's play`);
  if(isTrue){
    yes++;
  }else{
    no++;
  }
});

setTimeout(()=>{
  clearInterval(cancelId);
  cl(`pressed 'yes' ${yes} time/s & pressed 'no' ${no} time/s`);
}, 5000);