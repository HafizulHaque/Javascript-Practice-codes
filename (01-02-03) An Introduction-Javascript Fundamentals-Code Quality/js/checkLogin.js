'use strict'
let visitor = prompt(`who's there?`, ``);
if(visitor==null){
  alert(`Canceled`);
}else if(visitor=='Admin'){
  let password = prompt(`Password?`, ``);
  if(password==null){
    alert(`Canceled`);
  }else if(password=='TheMaster'){
    alert(`Welcome!`);
  }else{
    alert(`Wrong password`);
  }
}else{
  alert(`I don't know you`);
}