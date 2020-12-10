`use strict`;
let cl = arg => console.log(arg);

// Task - 01 
//cl(`--------------- call every second a number in given range - variant - 01 ----------------`);
let printNumbers = (from, to) => {
  let cnt = from;
  let func = ()=>{
    if(cnt>to) clearInterval(clearId);
    cl(`--${cnt++}--`);
  }
  func(); // added the function additionaly one time at first to avoid the time delay before first execution.
  let clearId = setInterval(func, 1000);
}

printNumbers(3, 9);

//cl(`--------------- call every second a number in given range - variant - 02 ----------------`);

printNumbers = (from, to) => {
  let cnt = from;
  setTimeout(func = () => {
    if(cnt>to);
    else{
      cl(`**${cnt++}**`);
      setTimeout(func, 1000);
    }
  });
}

printNumbers(2, 5);