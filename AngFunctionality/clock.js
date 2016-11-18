    var clock = angular.module('clockApp', []); 
    clock.controller('clockController', timeFunc); 
    clock.controller('Ctrl2', newFunc); 
    function timeFunc($scope){
      $scope.testA = 's1'; 
      $scope.textBoxChange = function(){
        $scope.change = 'entering name now...'; 
        setTimeout(function(){
          $scope.change = ''; 
          $scope.$apply();   
        }, 2500); 
      }; 
      $scope.time = new Date().toTimeString().slice(0,8); 
      $scope.updateTime = function(){
        $scope.time = new Date().toTimeString().slice(0,8); 
      }; 
    }
    function newFunc(){
      this.testA = 'using Ctrl as syntax'; 
    }; 