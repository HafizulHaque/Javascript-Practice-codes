`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

//task-03
cl(`-----------Fix function that loss 'this'-------------`);

function askPassword(ok, fail) {
  let password = 'rockstar'; //prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let guestUser = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(()=>{guestUser.loginOk()}, ()=>{guestUser.loginFail()}); // way-01

for(let key in guestUser){
  if((typeof guestUser[key])=='function'){
    guestUser[key] = guestUser[key].bind(guestUser);
  }
}
askPassword(guestUser.loginOk, guestUser.loginFail); // way-02