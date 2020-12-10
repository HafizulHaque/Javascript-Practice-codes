`use strict`;
let cl = arg => console.log(arg);

class Animal{
  constructor(name){
    this.name = name;
    this.speed = 0;
  }
  run(speed){
    this.speed = speed;
    cl(`running at speed ${this.speed}`);
  }
  stop(){
    this.speed = 0;
    cl(`running stopped.`);
  }
}

class Rabbit extends Animal{
  hide(){
    cl(`${this.name} hides`);
  }
  stop(){
    setTimeout(()=>{super.stop()}, 1000); // arrow function has no super of it's own
    this.hide();
  }
}

let rabbit = new Rabbit('White rabbit');

cl(rabbit.speed);
rabbit.run(60);
cl(rabbit.speed);
rabbit.stop();
rabbit.hide();

function createAnimal(name){
  return class{
    constructor(){
      this.name = name;
    }
    jump(){
      cl(`${this.name} jumps`);
    }
  }
}

class Fox extends createAnimal('fox'){
  constructor(){
    super(); // child class constructor must call super() before calling 'this'
    this.name = 'brown fox';
  }
  eat(){
    cl(`${this.name} eats`);
  }
  //override
  jump(){
    cl(`overrided jump`);
  }
}

let fox = new Fox();
cl(fox.name);
fox.eat();
fox.jump();

// Tricky

class Bird{
  kind = 'Aeves';
  constructor(){
    this.showKind();
  }
  showKind(){
    cl('bird');
  }
}

class Dove extends Bird{
  kind = 'Vertibra';
  showKind(){
    cl('dove');
  }
}

cl(`------------------`);
let bird = new Bird();
let dove = new Dove();