'use strict';
let cl = arg => console.log(arg);

cl('----------------------Date Parsing-----------------------------');

// to parse date from string date should be in format: [  YYYY-MM-DDThh:mm:ss.sssZ  ] form.
// YYYY-MM-DD  ---> year, month, date
// T ---> delimiter
// hh:mm:ss.sss ---> hour, minute, second, milisecond
// Z ---> timezone in format +-hh:mm  --> plus/minus, hour, minute
let timeString = '2020-10-15T05:30:45.569+05:30'; 
let ms = Date.parse(timeString);  // Date.parse() - to parse date from string
let date = new Date(ms);
cl(`${date}`);

timeString = '2018-09-27T09:07:45.675Z';
ms = Date.parse(timeString);
date = new Date(ms);
cl(`${date}`);