$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    $.ajax({
      url: 'https://chattyweather.herokuapp.com/api/weather',
      data: {latitude: latitude, longitude: longitude},
      success: success
    });
 });
}, false);

function success(data) {
  $('#temp').append(data.temperature + "F   " + data.weatherEvent.split("-").join(" "));

  $('#phrase').append(data.phrases[Math.floor(Math.random() * data.phrases.length)]);
  $('#food').append(data.foods[Math.floor(Math.random() * data.foods.length)]);
  $('#prop').append(data.props[Math.floor(Math.random() * data.props.length)]);
  $('#activity').append(data.activity[Math.floor(Math.random() * data.activity.length)]);
}