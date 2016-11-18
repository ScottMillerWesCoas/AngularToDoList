var otherMod = angular.module("OtherMod", ["CalcApp", "clockApp", "ngTagsInput", "ToDoApp"]); 



otherMod.controller("TagsCtrl", TagsFunc); 

function TagsFunc(){
  this.tags = [
    { text: 'Funny' },
    { text: 'Cute' },
    { text: 'Crazy' }
  ];
}