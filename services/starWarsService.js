angular.module('routingApp')
.service('starWarsService', function($http) {
  this.getPeople = function() {
    return $http.get('http://swapi.co/api/people/')
    .then(function(response) {
      return response.data;
    })
  }

  this.getPerson = function(url) {
    return $http.get(url)
    .then(function(response) {
      return response.data;
    })
    // make an $http call to the url and return the data from it.
  }
  // getPerson function will get one person from swapi
  // And return their details.
})
