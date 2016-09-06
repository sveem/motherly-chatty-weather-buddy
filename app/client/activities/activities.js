angular.module('chattyWeather.activities', [])

.controller('activitiesController', function($scope, $http, Activities, $window) {

  $scope.data;

  var initializeActivities = function () {
    var activity =  $window.localStorage.getItem('currentActivity');
    Activities.getActivities(activity)
    .then(function (activities) {
      $scope.data = activities;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  initializeActivities()

})
