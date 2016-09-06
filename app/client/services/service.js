

angular.module('chattyWeather.service', [])

.factory('goGet', function($window, $http) {
  
  var getWeatherData = function () {
    return new Promise(function(resolve, reject) {
      $window.navigator.geolocation.getCurrentPosition(function(location) {
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        console.log('here', latitude, longitude);
        resolve($http({
          method: 'GET',
          url: '/api/weather',
          params: {latitude: latitude, longitude: longitude}
        }));
      });    
    });
  };

  return {
    getWeatherData: getWeatherData
  };
})



.factory('Activities', function ($http, $location, $window) {


    var getActivities = function(activity){
      if(activity === undefined) {
        activity = $window.localStorage.getItem('currentActivity');
      } else {
        $window.localStorage.setItem('currentActivity', activity);
      }

      return $http({
        method: 'POST', 
        url: '/api/activities/',
        data: {activity: activity}
    })
    .then(function (resp) {
      return resp.data;
    });
  }    
  return {
    getActivities: getActivities
  };
})


.factory('Food', function ($http, $location, $window) {
  var postFoodPlaces = function(food){
    if(food === undefined) {
      food = $window.localStorage.getItem('currentActivity');
    } else {
      $window.localStorage.setItem('currentActivity', food);
    }
    return $http({
      method: 'POST', 
      url: '/api/food/',
      data: {food: food}
    })
  
    .then(function (resp) {
      return resp.data;
    });
  }    
  
  return {
    postFoodPlaces: postFoodPlaces
  };
})