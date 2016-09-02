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
    return $http({
      method: 'POST', 
     url: '/api/activities/',
     params: {activity:activity},
   })         
   
  }

  var postActivities = function (){
    return $http({
      method: 'GET',
      url: '/api/activities/'
    })
    .then(function (resp) {
      console.log(resp.data)
      return resp.data;
    });
  }  
  

    return {
      getActivities: getActivities,
      postActivities:  postActivities
    };



})
