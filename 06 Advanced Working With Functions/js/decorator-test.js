`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

// Task - 01 
cl(`--------------------Spy Decorator---------------------`);

function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

function spy(func){
  let retFunc = function(...args){
    func.apply(this, args);
    retFunc.calls.push(args);
  }
  retFunc.calls = [];
  return retFunc;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// Task - 02
cl(`--------------------Delaying Decorator---------------------`);

function f(x) {
  alert(x);
}

function delay(func, delayTime){
  return function(){
    setTimeout(()=>{
      func.apply(this, arguments);
    }, delayTime)
  }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("missy"); // shows "test" after 1000ms
f1500("sheldon"); // shows "test" after 1500ms




