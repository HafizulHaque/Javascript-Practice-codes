'use strict';
let cl = arg => console.log(arg);

let typed = document.getElementById(`typed`);
let processed = document.getElementById(`processed`);

function changeTyped(){
  document.addEventListener('keydown', function(event) {
    if(event.key=='Backspace'){
      typed.innerText = typed.innerText.slice(0, typed.innerText.length-1);
    }else{
      typed.innerText += event.key;
    }
  });
}

function changeProcessed(){
  document.addEventListener('keydown', function(event) {
    processed.innerText = typed.innerText;
  });
}

function wrapper(func, ms){
  let timerId;
  return function(){
    clearTimeout(timerId);
    timerId = setTimeout(func.apply(this, arguments), ms);
  }
}

changeTyped();
setInterval(changeProcessed, 2000);

