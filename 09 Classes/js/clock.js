'use strict';

let timerDiv = document.getElementById('timer');
let colors = ['red', 'blue', 'green', 'maroon', 'navy', 'pink', 'violet'];

class Clock {
  
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    let ap = hours < 12 ? 'AM' : 'PM';
    hours %= 12;
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    timerDiv.innerHTML = `${output} ${ap}`;
    let randColorId = Math.floor(Math.random()*colors.length);
    timerDiv.style.color = colors[randColorId];
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();