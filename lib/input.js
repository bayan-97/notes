'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');


function Input() {
    console.log('this is the row argv ',process.argv) 
    const args = minimist(process.argv.slice(2)); 
    console.log('this is the row argv after slice', process.argv.slice(2));
    console.log('this is the row argv after minimist', args);
    this.action = this.act(Object.keys(args)[1])
    this. payload = this.play(args.add)
  }

  Input.prototype.play = function (way) {
      if (way){
        return way
    
      }else{
        // console.log(`there is not note please inter it  `)
         
     
      }
    //i is for case-insensitive

  }
  
  Input.prototype.act = function(act) {
if (act!=="add"){
   console.log("unvalied method ")

}else{
    return act
}
  
  }
  
  module.exports = Input;