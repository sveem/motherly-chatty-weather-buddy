angular.module('chattyWeather.activities', [])

.controller('activityController', function($scope, $http, Activities) {
    var init = function (){
        Activities.getActivities(activity, $http, $scope)
        displayActivities(data)
        }; 

	var displayActivities = function(data){
		$scope.activities = data
      for(i=0;i< data.activity.businesses.length;i++){
        $scope.activites.push(data.activity.businesses[i]);
      }
  	}

  	init()
})  	



// angular.module('shortly.links', [])

// .controller('LinksController', function ($scope, Links) {
//   // Your code here

//   $scope.data = {};

//   var initializeLinks = function () {
//     Links.getAll()
//       .then(function (links) {
//         $scope.data.links = links;
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   initializeLinks();
//   });
