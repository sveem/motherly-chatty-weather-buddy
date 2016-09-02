angular.module('chattyWeather.weather', [])

.controller('MainCtrl', ['$scope', 'MyYelpAPI', function($scope, MyYelpAPI) {
                $scope.businesses = [];
                MyYelpAPI.retrieveYelp('', function(data) {
                    $scope.businesses = data.businesses;

                });
