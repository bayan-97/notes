'use strict';


const Input = require('./input.js');
// const new1=new input()
 function Input2() {

let newNotes=new Input()
console.log("hi",newNotes);

    let numId;
    if (numId) {

      numId=numId++
    } else {
        numId=0
        numId=numId++
    }
     

   this.id=numId,
    this.notrText=newNotes.payload
    this.newAction=newNotes.action

}
  Input2.prototype.execute = function (acting) {

      if (acting="add"){
        return acting
      }else{
          return false 
      }
    //i is for case-insensitive

  }
  
  Input2.prototype.add = function() {
  
  let returmethod=this.execute(this.newAction)
  
  if(returmethod!==false&& this.notrText!==false && returmethod!==''){
      console.log(`Adding Note:  ${ this.notrText}`)
  }
  }

 
  module.exports = Input2;
