angular.module('routingApp')
.controller('homeController', function($scope, starWarsService) {
  $scope.routeName = 'Home!';

  // $scope.people = [];
  // Use starWarsService.getPeople
  // to set $scope.people equal to an array
  // Of all my star wars peeps

  starWarsService.getPeople()
  .then(function(data) {
    $scope.people = data.results;
  })

})
