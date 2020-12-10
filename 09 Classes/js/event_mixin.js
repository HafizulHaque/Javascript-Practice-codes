`use strict`
const cl = arg => console.log(arg);

let eventMixin = {
  on(eventName, handler){
    if(!this._eventHandlers) this._eventHandlers = {};
    if(!this._eventHandlers[eventName]){
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler){
    let handlers = this._eventHandlers ? this._eventHandlers[eventName] : null;
    if(!handlers) return;
    for(let i = 0; i < handlers.length; i++){
      if(handlers[i]==handler){
        handlers.splice(i--, 1);
        return;
      }
    }
  },

  trigger(eventName, ...args){
    if(!(this._eventHandlers && this._eventHandlers[eventName])){
      return;
    }
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
}

//Usage

class Menu{
  choose(value){
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on('select', value => console.log(`value selected ${value}`));
menu.choose('786');