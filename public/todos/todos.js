app.controller('todoController', ['$scope','todoFactory',
function($scope,todoFactory){

let params={
    createHasInput:false
};

$scope.todos = [];

todoFactory.getTasks($scope);

 

    $scope.onEditClick=function(todo) {
        todo.isEditing=true;
        todo.updatedTask=todo.task;
    };

     $scope.onCancelClick=function(todo) {
        todo.isEditing=false;
    };


$scope.onCompletedClick=todoFactory.onCompletedTask.bind(this,$scope);
$scope.createTask=todoFactory.createTask.bind(this,$scope,params);  // getting from the factory file
$scope.updateTask=todoFactory.updateTask.bind(this,$scope); //todo will automatically go to factory,bind $scope
$scope.deleteTask=todoFactory.deleteTask.bind(this,$scope);
$scope.$watch('createTaskInput',function(val){todoFactory.watchText($scope,params,val);});


}]);