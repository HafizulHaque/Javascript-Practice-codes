`use strict`;
let cl = arg => console.log(arg);

let intervalId = setInterval(() => {
  let greetings = ['Good morning', 'Good night', 'Good afternoon', 'Hello', 'Goodbye'];
  let names = ['Adam', 'Jacob', 'Joseph', 'Gabriel', 'Abraham', 'David'];
  let [rand1, rand2] = [Math.floor(Math.random()*greetings.length), Math.floor(Math.random()*names.length)];
  cl(`${greetings[rand1]}, ${names[rand2]}`);
}, 500);

cl(`first: ${intervalId}`);

setTimeout(()=>{
  clearInterval(intervalId);
}, 5100);

cl(`second: ${intervalId}`);