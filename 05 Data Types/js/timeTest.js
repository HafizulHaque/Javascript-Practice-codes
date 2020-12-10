'use strict';
let cl = arg => console.log(arg);
let alert = cl;

let date = new Date();
cl( date );
cl(`${date}`);

// test 1
date = new Date('February 21, 1952 02:11:56');
cl(`${date}`);

// test 2
let getWeekDay = (date) => {
  let weekDay = '';
  switch(date.getDay()){
    case 0:
      weekDay = 'SU';
      break;
    case 1:
      weekDay = 'MO';
      break;
    case 2:
      weekDay = 'TU';
      break;
    case 3:
      weekDay = 'WE';
      break;
    case 4:
      weekDay = 'TH';
      break;
    case 5:
      weekDay = 'FR';
      break;
    case 6:
      weekDay = 'SA';
      break;
  }
  return weekDay
}

let getWeekDay2 = (date) => {
  let weekDay = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return weekDay[date.getDay()];
}

date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
date = new Date();
alert( getWeekDay2(date) );        // should output "TH"

// task 3

date = new Date(2015, 0, 2);

function getDateAgo(date, d){
  let resDate = new Date(date);
  resDate.setDate(resDate.getDate()-d);
  return resDate.getDate();
}

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// task 4

function getLastDayOfMonth(year, month){
  let date = new Date(year, month+1, 0);
  cl( date.getDate() );
}

getLastDayOfMonth(2012, 1); // = 29 (leap year, Feb).

// task 5
function getSecondsToday(){
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  cl( Math.round( (now-today)/1000 ) );
}
getSecondsToday();// == 36000 // (3600 * 10)

// task 6
function getSecondsTillTommorrow(){
  let now = new Date();
  cl( Math.round( 
    ((24*60*60*1000) - (now.getMilliseconds()+now.getSeconds()*1000+now.getMinutes()*60*1000+now.getHours()*60*60*1000)) / 1000
  ));
}
getSecondsTillTommorrow();

// task 7 

function formatDate(date){
  let baseDate = new Date(date);
  let milliSecondsDiff = Math.round(Date.now() - baseDate.getTime());
  let secDiff = Math.round(milliSecondsDiff/1000);
  let minDiff = Math.round(secDiff/60);

  let d = [
    '0' + date.getMonth(),
    '0' + date.getDate(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ].map(component => component.slice(-2));

  if(milliSecondsDiff < 1000){
    return `right now`;
  }else if(secDiff < 60){
    return `${secDiff} sec. ago`;
  }else if(minDiff < 60){
    return `${minDiff} min. ago`;
  }else{
    return `${d[1]}.${d[0]}.${date.getFullYear().toString().slice(-2)} ${d[2]}:${d[3]}`;
  }
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );