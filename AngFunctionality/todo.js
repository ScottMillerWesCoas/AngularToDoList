var toDoApp = angular.module('ToDoApp', []); 
toDoApp.controller('CtrlToDo', toDoFunc); 

function toDoFunc(){
  this.editFlag = false; 
  this.list = ['hurcut']; 
  this.addToDo = function(){
    this.list.push(this.newToDo);
    this.newToDo = '';  
  };
  this.addToDoImp = function(){
    this.list.unshift(this.newToDo); 
      this.newToDo = ''; 
  }; 
   this.delete = function(i){
    this.list.splice(i, 1); 
  };
  this.modify = function(el, i){
    this.list.splice(i, 1, el); 
        console.log('in mod', this.list);
  };   
  this.editMode = function(){
    this.editFlag = !this.editFlag; 
  }  
    

  // this.bClick = function(input){
  //   this.operator = input; 
  // }; 
  

}


