`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

// task - 03 
cl(`-------------------- Debounce Decorator --------------------`);

function show(text){
  cl(text);
}

// current call should be at least 'ms' time later than the previous one to execute - (not accurate as last call is never executed if time differece between last and second-last call is less than ms) 
function debounceDecorator(func, ms){
  let latestCallTime = -1;
  function callingFunc(){
    if(latestCallTime == -1){
      latestCallTime = Date.now();
      func.apply(this, arguments);
      cl(`Maiden Call`);
    }else{
      let timeDiff = Date.now()-latestCallTime;
      if(timeDiff>ms){
        latestCallTime = Date.now();
        func.apply(this, arguments);
      }
    }
  }
  return callingFunc;
}

// should be at least 'ms' timeDifference between current and next calls to execute the current call (last call is always executed)
function debounceDecorator2(func, ms){
  let timeout;
  return function(){
    clearTimeout(timeout);
    timeout = setTimeout(()=>func.apply(this, arguments), ms);
  }
}

show = debounceDecorator2(show, 500); 

show("a");
setTimeout( () => show("b"), 200);
setTimeout( () => show("c"), 500);
setTimeout( () => show("d"), 1550);
setTimeout( () => show("g"), 2100);

