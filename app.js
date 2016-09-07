angular.module('routingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeController',
      templateUrl: 'home/home.html'
    })
    .state('signup', {
      url: '/signup',
      controller: 'signupController',
      templateUrl: 'signup/signup.html'
    })
    .state('details', {
      url: '/details/:url',
      controller: 'detailsController',
      templateUrl: 'details/details.html'
    })
    // Change details state
    // So that it takes in an id
    // ANd will use a service to get the details for that one person.
})

// details
//   details.html
//   detailsController.js
// home
//   home.html
//   homeController.js
// signup
//   signup.html
//   signupController.js
// app.js
// controller.js
// index.html
// service.js
