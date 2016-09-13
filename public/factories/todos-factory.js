
app.factory('todoFactory',function todoFactory($http){

	function onCompletedTask($scope,todo){
		todo.isCompleted = !todo.isCompleted;
		$http.put('/todos/' + todo._id , {isCompleted:todo.isCompleted}).success(function(response) {
        getTasks($scope);
     });
	}

    
	function getTasks($scope){
		$http.get('/todos').success(function(response) {
			$scope.todos=response.todos;
		});
	}

	function createTask($scope,params) {
		if(!$scope.createTaskInput){ return; }
		
		$http.post('/todos',{
			task:$scope.createTaskInput,
			isCompleted: false,
			isEditing: false
		}).success(function(response) {
            getTasks($scope);
			$scope.createTaskInput='';
			console.log(response);
		});
        
	}

	function updateTask($scope,todo) {
     $http.put('/todos/' + todo._id , {task:todo.updatedTask}).success(function(response) {
       getTasks($scope);
       todo.isEditing=false;
     });
    }

    function deleteTask($scope,todoTodelete) {
    	$http.delete('/todos/' + todoTodelete._id ).success(function(response) {
        getTasks($scope);
     });
    }



    function watchText($scope,params,val){
    	
    	if(!val && params.createHasInput){
        $scope.todos.pop();
        params.createHasInput = false;
        }  
    	else if(val && !params.createHasInput){
            $scope.todos.push({task:val,isCompleted:false});
            params.createHasInput=true;
        } else if(val && params.createHasInput){
            $scope.todos[$scope.todos.length-1].task=val;
        }
    }

  return {
  	onCompletedTask:onCompletedTask,
  	getTasks:getTasks,
  	createTask:createTask,
  	updateTask:updateTask,
  	deleteTask:deleteTask,
  	watchText:watchText

  }
});
