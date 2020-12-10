`use strict`;
let cl = arg => console.log(arg);

// nested setTimeout instead of setInterval for continuous work after certain interval

let timerId = setTimeout(tik = () => {
  cl('tick');
  timerId = setTimeout(tik, 2000);
}, 2000);

// nested setTimeout is more flexible than setInterval -- to set delay based on condition
// if the function of setInterval is CPU hungry and take much time than the delay... the next function call will be immediately without any delay. that's problem. we cant predict the actual delay between function execution. but in case of nested setTimeout, the dealy between two subsequent execution is always equal to the delay time.