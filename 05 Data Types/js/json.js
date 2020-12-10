'use strict';
let cl = arg => console.log(arg);

let user = {
  name: 'John Doe',
  age: 34,
  occupation: 'hitman',
  toString(){
    return `Name: ${this.name} - Age: ${this.age} - Occupation: ${this.occupation}`;
  }
}

cl(`${user}`);

// JSON.stringify() --> object to JSON
// JSON.parse() --> JSON to object

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student); // converted json to string
cl( json );
cl( typeof json );

student = JSON.parse(json); // convert string to json
cl( student );
cl( typeof student );

//Difference - JSON string and object literal string

// JSON strings are double coated (""), no single cote or backticks
// JSON Object property names are also double coated ("")
// JSON only support following Data types:
// Object {...}, Array [...]
// Primitives (String, Numbers, Booleans, Null);

let obj = {
  isAvaialbe : 'don\'t know',
  quote: "\"Who will bell the cat?\"",
  isFamous: undefined,
  details(){
    console.log('I do not do anything.');
  }
}

let objectJson = JSON.stringify(obj); // function not included, undefined valued property discarded, double coated property name and strings
cl(objectJson);

let backJson = JSON.parse(objectJson);
cl(backJson);

// Symbol, function and undefined valued property are ignored. ********** Important


// circular references must be discarded to avoid JSON.stringify failure

let meetup = {
  title: 'Conference',
  perticipants: [{name: 'John'}, {name: 'Aaron'}]
}

let room = {
  no: 314
}

meetup.place = room;
room.occupiedBy = meetup; // circular reference

let jsonString;

//jsonString = JSON.stringify(meetup); // error as there is circular reference present
// cl(jsonString);

jsonString = JSON.stringify(meetup, ['title', 'perticipants']); // no error as there is circular property filtered by given object property name array. - but problem is this is too strict
cl(jsonString);

jsonString = JSON.stringify(meetup, (key, value) => {
  cl(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}, 2); 
// no error as there is circular property filtered by given replacer function. ( also used indentation 2 to visually output better, not suited for transferring over network, but perfect for prettify output)
cl(jsonString);


// JSON.stringify() method calls toJSON() methods of object if available

room = {
  no: 314,
  capacity: 500,
  dimension: {height: 34, width: 100, length: 500},

  toJSON(){
    return {
      dim: this.dimension,
      cap: this.capacity
    };
  }
}

cl( JSON.stringify(room, null, 2) );


// JSON - Parse
jsonString = `{"dim":{"height":34,"width":100,"length":500},"cap":500}`;

let parsedJSON = JSON.parse(jsonString, (key, val) => { // use reviver function to double primitive type value
  return ((typeof val) == 'object') ? val : val * 2;
})

cl(parsedJSON);


// Use of reviver function

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

meetup = JSON.parse(str, (key, value) => {
  if(key=='date'){
    return new Date(value); //use reviver function to convert json string date into date object while parsing
  }else{
    return value;
  }
});

cl( meetup.date.getDate() ); // no Error!

// works for multiple

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

let scheduleJson = JSON.parse(schedule, (key, value) => {
  if(key == 'date'){
    return new Date(value);
  }else{
    return value;
  }
});

cl( scheduleJson.meetups[0].date.getDate() );
cl( scheduleJson.meetups[1].date.getDate() );



// Task - Remove all circular references
cl(`---------------------------Task------------------------------`);

room = {
  number: 23
};

meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room.number
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

cl( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}, 2));

// cl( JSON.stringify(meetup) ); - circular reference

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/