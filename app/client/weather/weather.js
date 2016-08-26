angular.module('chattyWeather.weather', [])

.controller('WeatherController', function($scope, goGet) {
	$scope.weatherData = {};


  var init = function () {
    goGet.getWeatherData()
      .then(function (data) {
        console.log(data);
        $scope.weatherData = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  init();
})