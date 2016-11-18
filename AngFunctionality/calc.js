var calcApp = angular.module('CalcApp', []); 
calcApp.controller('Ctlr1', calcFunc); 
calcApp.controller('dirCtrl', dirFunc); 
function calcFunc(){
  this.result = 0; 
  this.bClick = function(input){
    this.operator = input; 
  }; 

  this.check1 = function(){
    this.error = ''; 
    if (isNaN(parseFloat(this.first))) this.error = 'ENTER A NUMBER!'; ; 
    console.log('error', this.error); 
  }; 
  this.check2 = function(){
    this.error = ''; 
    console.log('check', isNaN(parseFloat(this.second))); 
    if (isNaN(parseFloat(this.second))) this.error = 'ENTER A NUMBER!'; 
  }; 
  
  this.eq = function(){
    this.first = parseFloat(this.first); 
    this.second = parseFloat(this.second); 
    if (this.operator === '+') {
      this.result = this.first + this.second; 
    }
    else if (this.operator === '-') {
      this.result = this.first - this.second; 
    }
    else if (this.operator === '*') {
      this.result = this.first * this.second; 
    }
    else {
      this.result = this.first / this.second; 
    }
  }; 
}

function dirFunc(){
  this.list1 = [1,2,3,4,5]; 
  this.list2 = [
  {name: 'Joel', age: 25}, 
  {name: 'Nerlens', age: 21}, 
  {name: 'Ben', age: 20}
  ]; 
}





