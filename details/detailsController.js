angular.module('routingApp')
.controller('detailsController', function($scope, starWarsService, $stateParams) {
  console.log($stateParams);
  starWarsService.getPerson($stateParams.url)
  .then(function(person) {
    $scope.person = person;
  })
})
