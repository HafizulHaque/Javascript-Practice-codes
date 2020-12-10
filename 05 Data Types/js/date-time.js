'use strict';
const cl = arg => console.log(arg);

//show current dateTime
let date = new Date();
cl(date);
cl(`${date}`);

date = new Date(0); // date counted in miliseconds from 1 january 1970
cl(`${date}`);

date = new Date(365*24*60*60*1000+349*24*60*60*1000); //victory day of Bangladesh
cl(`${date}`);

date = new Date (-24*60*60*1000); // - timestamp value also permissible - 1 day back from 1 jan, 1970
cl(`${date}`);

date = new Date('03-08-2004'); // passed as a string
cl(`${date}`);

let timestamp = date.getTime(); // get timestamp by date.getTime() method  - ****** important
cl( timestamp );

date = new Date (timestamp + 24*60*60*1000); // Date constructor by using timstamp as argument.
cl(`${date}`);

// date constructor ( new Date(year, month, date, hours, minutes, seconds, ms) )
date = new Date(2019, 1, 20, 5, 30, 0, 0);
cl(`${date}`);

//date methods
cl(`${date.getFullYear()}`);
cl(`${date.getUTCFullYear()}`);
cl(`${date.getMonth()}`);
cl(`${date.getUTCMonth()}`);
cl(`${date.getDate()}`);
cl(`${date.getUTCDate()}`); // different
cl(`${date.getHours()}`);
cl(`${date.getUTCHours()}`);
cl(`${date.getMinutes()}`);
cl(`${date.getUTCMinutes()}`);
cl(`${date.getSeconds()}`);
cl(`${date.getUTCSeconds()}`);
cl(`${date.getMilliseconds()}`);
cl(`${date.getUTCMilliseconds()}`);

cl(`${date.getDay()}`); // (0 --> sunday) ~ (6 --> saturday)
cl(`${date.getUTCDay()}`); // (0 --> sunday) ~ (6 --> saturday) // different

date = new Date();
let timeZoneOffset = date.getTimezoneOffset(); // return difference between Local & UTC time in minutes
cl( timeZoneOffset ); // -360 --> means BD timezone is 6 hours ahead of UTC timezone

date = new Date();

// set date properties

date.setFullYear(2020);
date.setMonth(9);
date.setDate(15);
date.setHours(9);
date.setMinutes(15);
date.setSeconds(30);
date.setMilliseconds(800);

cl(`${date}`);

timestamp = date.getTime();

date.setTime(timestamp - 6*60*60*1000); // set to curresponding UTC time
cl(`${date}`);

// Out of range date are autocorrected by JS  *** Important

date = new Date(2029, 1, 29); // set to February 29, 2029, but not leap year, autocorrected to 1 March, 2029
cl(`${date}`);

date = new Date('02-28-2020'); // string parsed as MM-DD-YYYY
cl(`${date}`);

date.setDate(date.getDate() + 2); // increased by 2 day, handled automatically
cl(`${date}`);
date.setDate(date.getDate() - 3); // decreased by 3 day, handled automatically
cl(`${date}`);

date.setMinutes(date.getMinutes() + 30);  // set time to 30 minutes later
cl(`${date}`);

// date converted to number(timestamp) 
cl(+date);  // same as : date.getTime()

// date difference
let born = new Date('10-15-1996');
let today = new Date();

let age = Math.ceil(( (today-born) / (1000*60*60*24*365) )); // date difference (today-born) is returned in milliseconds and then processed as needed

cl(`You are on your ${age}${age==1?'st':age==2?'nd':age==3?'rd':'th'}.`);

// date difference - 02

let start = new Date();
for(let i = 0; i < 10000000; i++){
  // do nothing
}
let end = new Date();
cl(`Took ${end-start}ms to iterate through the loop.`);

// if we only need date difference, not the date object itself then Date.now() is good to use - it's faster. Basically it's similar to new Date().getTime()

// so the loop above can be written as:

start = Date.now();
for(let i = 0; i < 10000000; i++){
  //again do nothing
}
end = Date.now();
cl(`Took ${end-start}ms to iterate through the loop.`);

cl('----------------------Date Parsing-----------------------------');

// to parse date from string date should be in format: [  YYYY-MM-DDThh:mm:ss.sssZ  ] form.
// YYYY-MM-DD  ---> year, month, date
// T ---> delimiter
// hh:mm:ss.sss ---> hour, minute, second, milisecond
// Z ---> timezone in format +-hh:mm  --> plus/minus, hour, minute
let timeString = '2020-10-15T05:30:45.569+05:30'; 
let ms = Date.parse(timeString);  // Date.parse() - to parse date from string
date = new Date(ms);
cl(`${date}`);

timeString = '2018-09-27T09:07:45.675Z';
ms = Date.parse(timeString);
date = new Date(ms);
cl(`${date}`);