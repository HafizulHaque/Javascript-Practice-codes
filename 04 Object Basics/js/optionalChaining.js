'use strict';
let cl = (arg) => console.log(arg);

let user = {
  name: 'Rouf Assad',
  address: {
    postCode: 4350,
    street: 'Noapara'
  },
  contactNo: '01817373784'
}

let user2 = {};

cl(user);
cl(user && user.address && user.address.street);
cl(user2);
// cl(user2 && user2.address && user2.address.street);
cl(user?.address?.street);