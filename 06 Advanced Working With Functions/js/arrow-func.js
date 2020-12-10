`use strict`;
let cl = arg => console.log(arg);

let group = {
  name: 'Thesis group',
  students: ['Bob', 'Alice', 'John'],
  showList(){
    this.students.forEach(
      student => cl(`${this.name}: ${student}`)
    );
  }, // ok: arrow function has no this, so it borrows context 'this' from outside & hence it work fine.

  // showList(){
  //   this.students.forEach(function(student){
  //     cl(`${this.name}: ${student}`); // 'this' dont work
  //   })
  // }
}

group.showList();

// Other limitation of arrow function:
// 01. it doesn't have 'this'
// 02. it can't be called with new (constructor)
// 03. arrow function can't be binded [ func.bind(context) ] as it has no this
// 04. arrow function has no 'argument' 

let arrowFunc = ()=>{
  // cl(arguments);
  cl(this.name);  // cant get context this
}

// arrowFunc(4, 5);  - dont have argument. gives wrong result

arrowFunc = arrowFunc.bind({name: 'Aziz'}); //-cant bind

arrowFunc(); // undefined



// ---------------------- Context + arguments -----------------------

function sayGreetTo(to){
  cl(`${this.greet}, ${to}`);
}

function differ(func, ms){
  return function(){
    setTimeout(()=>func.apply(this, arguments), ms);
  }
}

function differReg(func, ms){
  return function(){
    let ctx = this; // saved context
    let args = arguments; // saved arguments
    setTimeout(function(){
      func.apply(ctx, args); // passing outer arguments and context as to get the code right as this regular function has it's own arguments and context = this
    }, ms);
  }
}

sayGoodMorningTo = differReg( sayGreetTo.bind({greet: 'Good Morning'}) , 3000);
sayGoodAfternoonTo = differ( sayGreetTo.bind({greet: 'Good Afternoon'}) , 3000);

sayGoodMorningTo('Shreya');
sayGoodAfternoonTo('Shila');