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




.factory('Activities', function ($http, $location) {
  var getYelpTerm = function (activity) {
    return $http({
      method: 'POST',
      url: '/api/activities',
      data: activity
    })
    .then(function (resp) {
      return resp.data.business;
    });
  };




  // var getActivities = function (searchTerm) {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/activities/',
  //     data: 
  //   })
  //   .then(function (resp) {
  //     return resp.data.business;
  //   });
  // };




  return {
    getYelpTerm: getYelpTerm,
    // getActivities: getActivities,
  };
});

