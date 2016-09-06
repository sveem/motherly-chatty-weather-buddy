angular.module('chattyWeather.activities', [])

.controller('activitiesController', function($scope, $http, Activities) {

  $scope.data;

  var initializeActivities = function () {
    Activities.getActivities()
    .then(function (activities) {
      $scope.data = activities;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  initializeActivities()

})
