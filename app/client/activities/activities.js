angular.module('chattyWeather.activities', [])

.controller('activityController', function($scope, $http, Activities) {
//     // var init = function (){
//     //     Activities.getActivities($http, $scope)
//     //     // displayActivities(data)
//     //     }; 

// // 	var displayActivities = function(data){
// // console.log(data)
// // 		$scope.activities = data
// //       for(i=0;i< data.activity.businesses.length;i++){
// //         $scope.activites.push(data.activity.businesses[i]);
// //       }
// //   	}


  $scope.data = {};

  var initializeActivities = function () {
    Activities.getActivities(activity)
      .then(function (activities) {
        $scope.data = activities;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeActivities();
  });




