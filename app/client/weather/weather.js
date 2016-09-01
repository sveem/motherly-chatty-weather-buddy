angular.module('chattyWeather.weather', [])

.controller('WeatherController', function($scope, goGet) {
	var weatherData;
  $scope.phrase;
  $scope.food;
  $scope.prop = "...getting data from server...";
  $scope.activity;
  $scope.temp;
  $scope.city;
  $scope.time;

  function timeNow() {
    var d = new Date(),
        h = (d.getHours()<10?'0':'') + d.getHours(),
        m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    return h + ':' + m;
  }

  var init = function () {
    goGet.getWeatherData()
      .then(function (data) {
        // console.log(data);
        weatherData = data.data;
        // display(weatherData);
        setInterval(display.bind(null, weatherData), 5000);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  var display = function(data) {
    $scope.$apply(function() {
      $scope.phrase = data.phrases[Math.floor(Math.random() * data.phrases.length)];
      $scope.food = data.foods[Math.floor(Math.random() * data.foods.length)];
      $scope.prop = data.props[Math.floor(Math.random() * data.props.length)];
      $scope.activity = data.activity[Math.floor(Math.random() * data.activity.length)];
      $scope.temp = data.temperature;
      $scope.city = data.timezone.split("/")[1];
      $scope.time = timeNow();
    });
  }

  init();
})