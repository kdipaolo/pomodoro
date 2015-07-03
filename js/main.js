var app = angular.module('pomodoro', []);

app.controller('sidebarController', ['$scope' , function($scope) {

  $scope.add = function() {
    var newTodo = $scope.newTodo;
      if (!newTodo.length) {
        return;
      }
      $scope.tasks.push({
        name: newTodo
      });
      $scope.newTodo = '';
  };
  
  $scope.tasks = [
    { name: 'Ari'},
    { name: 'Q'},
    { name: 'Sean'},
    { name: 'Anand'}
  ];

}]);

app.controller('timerController', ['$scope' , function($scope) {

var interval;
    var minutes = 0;
    var seconds = 5;
    

    $scope.countdown = function(){
        interval = setInterval(function() {
            var el = document.getElementById('watch');
            
            if(seconds == 0) {
                if(minutes == 0) {
                    // finished();             
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if(minutes < 1) {
                minutes = '00';
            } 

            if(seconds < 10){
                el.innerHTML = minutes + ':0' + seconds;  
            } else {
                el.innerHTML = minutes + ':' + seconds;
            }
            
            seconds--;
        }, 1000);
    }

    function finished(){
        var timer = document.getElementById('timer');
        timer.className = timer.className + " finished";
        return;
    }


    
    

}]);

app.directive('task', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/task-template.html',
    controller: 'sidebarController'
  };
});