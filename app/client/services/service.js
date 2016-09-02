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




// .factory('Activities', function ($http, $location) {
//   var getYelpTerm = function (activity) {
//     $http({
//       method: 'POST',
//       url: '/api/activities',
//       params: {activity:activity}
//     })

// .success(function(data){
//         $location.path('/activities');
//     });
//   };

//   return {
//     getYelpTerm: getYelpTerm,
//     getActivities: getActivities
//   };
// });


.factory('Activities', function ($http, $location) {
  var getActivities = function(activity){
    $http({
      method: 'GET', 
     url: '/api/activities/',
     params: {activity:activity},
   }).         
    success(function(data, status, headers, config) {
      return resp.data;
  }).
    error(function(data, status, headers, config) {
      console.log("error")
    });
  }

    return {
      getActivities: getActivities
    };

})

