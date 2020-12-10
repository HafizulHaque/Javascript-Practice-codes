'use strict'
function ask(name, question, agree, disagree){
  if(confirm(question)){
    agree(name || 'User');
  }else{
    disagree(name || 'User');
  }
}

function thanks(name){
  alert(`Thanks ${name} for your support.`);
}
function hope(name){
  alert(`Hello ${name}! Hope you will support us in future.`);
}

let userName = prompt('Hello! Could you please enter your name', 'User');
ask(userName, 'Do you support us?', thanks, hope);

