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
      .when('/food', {
      templateUrl: 'food/food.html',
      controller: 'foodController'
    })
    
    .otherwise({
      redirectTo: '/weather'
    });
})