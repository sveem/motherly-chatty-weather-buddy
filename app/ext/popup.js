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
  console.log(data)
  $('#page').append(JSON.stringify(data));
}
