`use strict`;
let cl = arg => console.log(arg);
let alert = cl;

let animal = {
  move: true,
  hasChlorofil: false
}


let tiger = {
 color: 'black-yellow-dashed'
}

tiger.__proto__ = animal;

cl(tiger);
cl(tiger.hasChlorofil);
cl(tiger.move);

// 02

let person = {
  hasName: 'true',
  name: 'user',
  speak(){
    cl(`${this.name} speaks`);
  }
}

let robert = {
  name: 'Robert',
  __proto__: person
}
let roben = {
  name: 'Arian',
  __proto__: person
}

let unknown = {
  __proto__: roben
}

robert.speak();
unknown.speak(); // long chain of inheritance - inherited properties are not shown directly
//when property and functions() are called they are searched in bottom-up approach in inherition tree

// __proto__ rules:
// their value can be either null or another object
// reference cant be circular - throw an error

// writing doesn't use prototype, accessor property is exception as it works as an underlying function running

let user = {
  name: 'John',
  surname: 'Doe',
  getName(){
    return {
      firstName: this.name,
      lastName: this.surname
    }
  },
  get fullName(){
    return `${this.name} ${this.surname}`;
  },
  set fullName(arg){
    [this.name, this.surname] = arg.split(' ');
  }
}

let rahim = {
  __proto__: user
}

cl(`---------------writing------------------`);
cl(rahim.fullName)
rahim.fullName = 'Rahim Sterling'; // writing done in upper-level
cl(rahim.fullName)

cl(`--------------------`);
cl(rahim.getName());
rahim.getName = function(){
  return `will not go to upper level now`;
}
cl(rahim.getName()); // writing not done, rather implemented in the lower level

let hobbit = {
  sleep(){
    this.isSleeping = true
  }
}

let hobbit1 = {
  __proto__: hobbit
}

hobbit1.sleep();

cl(hobbit1.isSleeping);
cl(hobbit.isSleeping);


let parent = {
  length: 20,
  width: 30,
  area(){
    return this.length * this.width;
  }
}

let child = {
  height: 10,
  volume(){
    return this.length * this.width * this.height;
  },
  __proto__: parent
}


cl(Object.keys(child)); // only own properties, inherited properties are not shown

for(let key in child){ 
  if(child.hasOwnProperty(key)){
    cl(`[Own Property] ${key}`);
  }else{
    cl(`[Inherited Property] ${key}`);
  }
}


// task

let hamster = {
  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    if(this.stomach){
      this.stomach.push(food);
    }else{
      this.stomach = [food];
    }
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
speedy.eat("turtle");
lazy.eat('pineapple');
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>