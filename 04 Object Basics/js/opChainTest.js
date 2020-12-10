'use strict';

let user = {
  name: 'Rouf Assad',
  address: {
    postCode: 4350,
    street: 'Noapara'
  },
  contactNo: '01817373784',
  sayHello(){
    alert('hello');
  }
}

let user2 = {
  address: 'Chittagong'
};

console.log(user?.address?.street);
console.log(user2?.address?.street);

user.sayHello?.(); // optional chaining to function.
alert(user?.['name']);

delete user.wife;
delete user?.wife;

// user?.name = 'Harsha bhogle'; 
// error . ?. operator only used in right side of expression. used only for safe reading and deleting. not editing
console.log(user);
