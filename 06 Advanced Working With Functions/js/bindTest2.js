`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

let prompt = ()=>{
  return 'rockstar';
}

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); 

askPassword(()=>{user.login(true);}, ()=>{user.login(false);})

for(let key in user){
  if(typeof user[key]=='function'){
    user[key] = user[key].bind(user);
  }
}
