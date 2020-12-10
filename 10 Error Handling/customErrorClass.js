`use strict`;
const cl = arg => console.log(arg);

class ValidationError extends Error{
  constructor(message){
    super(message);
    this.name = this.constructor.name;
  }
}

function test(){
  throw new ValidationError('Opps! validation failed');
}

try{
  test();
}catch(e){
  cl(e.name);
  cl(e.message);
  cl(e.stack);
}

class RequiredPropertyError extends ValidationError{
  constructor(propName){
    super(`Value Missing for ${propName} property`);
    this.property = propName;
  }
}

function JSONverify(json){
  let user = JSON.parse(json);
  if(!user.name) throw new RequiredPropertyError('name');
  if(!user.age) throw new RequiredPropertyError('age');
  return user;
}

cl(`------------------validation check of JSON----------------------------`);
try{
  JSONverify(`{"name": "Anthony"}`);
  //return x++;  //causes ReferenceError - not caught
}catch(e){
  if(e instanceof RequiredPropertyError){
    cl(`${e.name} - ${e.message}`);
  }else if(e instanceof ValidationError){
    cl(`${e.name} - ${e.message}`);
  }else if(e instanceof SyntaxError){
    cl(`${e.name} - ${e.message}`);
  }else{
    throw e;
  }
}