`use strict`;
const cl = arg => console.log(arg);

function process(){
  try{
    //throw new SyntaxError('Custom Syntax Error thrown');
  }catch(error){
    if(!(error instanceof SyntaxError)) throw error;
    cl(`---SyntaxError Caught`);
  }finally{
    cl(`Finally block executing...`);
  }
  blabla();
}


try{
  process();
}catch(e){
  cl(`---Other Errors than SyntaxError Caught`);
}