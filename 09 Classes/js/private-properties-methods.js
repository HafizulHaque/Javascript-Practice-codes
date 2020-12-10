`use strict`
const cl = arg => console.log(arg);

class CoffieMaker{
  _waterAmount = 0;

  constructor(power=0){
    // this.power = power;
    if(power<0){
      cl(`cant set negetive value as power. Default value 0 set instead.`);
      this._power = 0;
    }else{
      this._power = power;
    }
    cl(`Created a coffie maker with power: ${this._power}`);
  }

  get waterAmount(){
    return this._waterAmount;
  }
  set waterAmount(amount){
    if(amount<0) throw new Error("Negetive water amount cant't be set");
    this._waterAmount = amount;
  }
  get power(){
    return this._power;
  }
  // set power(value){ //--- read only power ---
  //   if(value<0) throw new Error("Negetive power can't be set");
  //   this._power = value;
  // }
}

let coffieMaker = new CoffieMaker(100);
coffieMaker.waterAmount = 90;
coffieMaker.power = 97; // ignored
cl(coffieMaker.waterAmount);
cl(coffieMaker.power);

class BlackCoffieMaker{
  _waterAmount = 0;
  #maxWaterAmount = 200;
  #maxPowerValue = 100
  #isvalid = function(){
    return (this.getWaterAmount()<=this.#maxWaterAmount) && (this.getPower() <= this.#maxPowerValue);
  }
  constructor(power=0){
    // this.power = power;
    if(power<0){
      cl(`cant set negetive value as power. Default value 0 set instead.`);
      this._power = 0;
    }else{
      this._power = power;
    }
    cl(`Created a black coffie maker with power: ${this._power}`);
  }

  getWaterAmount(){
    return this._waterAmount;
  }
  setWaterAmount(amount){
    if(amount<0) throw new Error("Negetive water amount cant't be set");
    this._waterAmount = amount;
  }
  getPower(){
    return this._power;
  }
  
  checkStatus(){
    return this.#isvalid();
  }
}

let blackcoffieMaker = new BlackCoffieMaker(100);
blackcoffieMaker.setWaterAmount(300);
cl(blackcoffieMaker.getPower());
cl(blackcoffieMaker.getWaterAmount())
cl(blackcoffieMaker.checkStatus());
// cl(blackcoffieMaker.#isValid()); - private - not visible outside class itself
// cl(blackcoffieMaker.#maxWaterAmount);