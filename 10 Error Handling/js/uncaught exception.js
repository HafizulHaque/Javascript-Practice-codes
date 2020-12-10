`use strict`;
const cl = arg => console.log(arg);

process.on("uncaughtException", () => {
  cl('Error occured');
}) // error also caught

throw new SyntaxError('custom Thrown Error');


cl('hello world');