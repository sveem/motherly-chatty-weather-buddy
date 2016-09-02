angular.module('chattyWeather', [
  'chattyWeather.weather',
  'chattyWeather.service',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
	  .when('/weather', {
	    templateUrl: 'weather/weather.html',
	    controller: 'WeatherController'
	  })
      .when('/activities', {
      templateUrl: 'weather/activities.html',
      controller: 'activityController'
    })

    .otherwise({
      redirectTo: '/weather'
    });
})