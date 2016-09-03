angular.module('chattyWeather.food', [])

.controller('foodController', function($scope, $http, Food) {

  $scope.data;
// console.log(data)

var initializeActivities = function () {
	console.log("hereeee")
	Food.postFoodPlaces()
	.then(function (foodPlaces) {
	         $scope.data = foodPlaces;
	     })
	.catch(function (error) {
		console.error(error);
	});


};

  initializeActivities()

})


