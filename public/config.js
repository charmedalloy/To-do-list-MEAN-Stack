var app=angular.module('myapp',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
  function($stateProvider,$urlRouterProvider,$locationProvider)
  {
         $urlRouterProvider.otherwise('/');       

         $stateProvider
           //.state('home',{
//             url:'/',
//             templateUrl: 'users/user.html',
//             //controller: 'todoController'
//         })
           .state('app',{
         	 url:'/',
         	 templateUrl: 'todos/todos.html',
             controller: 'todoController'
         })
           .state('about',{
          	  url: '/about',
          	  templateUrl: 'about/about.html'
          });       

          $locationProvider.html5Mode(true);   //This is to get rid of # that we need to include in the url.       

  }]);


