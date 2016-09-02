angular.module('chattyWeather.activities', [])

.controller('activityController', function($scope, $http, Activities) {

  $scope.data;
// console.log(data)

var initializeActivities = function () {
	console.log("hereeee")
	Activities.postActivities()
	.then(function (activities) {
		console.log('activities')
	         $scope.data = activities;
	         // for(i=0;i< activities.length;i++){
	         // 	$scope.data.push(activities[i])
	         // 	console.log(activities[0].name)
	         // 	$scope.data[i] = business;

	         // 	var business = {}
	         // 	$scope.name = activities[i].name;
	         // 	$scope.phone = activities[i].phone
	         // }

	     })
	.catch(function (error) {
		console.error(error);
	});


};

  initializeActivities()

})
