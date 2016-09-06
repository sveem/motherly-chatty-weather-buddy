angular.module('chattyWeather.food', [])

.controller('foodController', function($scope, $http, Food, $window) {

  $scope.data = [];

  var initializeFood = function () {
    var food = $window.localStorage.getItem('currentFood');
    Food.postFoodPlaces(food)
    .then(function (foodPlaces) {
      $scope.data = foodPlaces;
    })
    .catch(function (error) {
        console.error(error);
    });
  };

  initializeFood();

})


