`use strict`;
let cl = arg => console.log(arg);

// zero delay setTimeout
let time = new Date();
setTimeout(()=>cl(`${Date.now()-time} - world`));
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);
cl(`${Date.now()-time} - hello`);


// any setTimeout() or setInterval() is invoked only after current script is done executing. - so here after executing all 'hello's - the 'world' is run even it has zero delay.