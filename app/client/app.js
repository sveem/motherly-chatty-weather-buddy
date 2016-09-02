angular.module('chattyWeather', [
  'chattyWeather.weather',
  'chattyWeather.service',
  'chattyWeather.activities',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
	  .when('/weather', {
	    templateUrl: 'weather/weather.html',
	    controller: 'WeatherController'
	  })
      .when('/activities', {
      templateUrl: 'activities/activities.html',
      controller: 'activityController'
    })

    .otherwise({
      redirectTo: '/weather'
    });
})