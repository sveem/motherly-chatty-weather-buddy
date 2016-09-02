$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    $.ajax({
      url: 'http://localhost:3000/api/weather',
      data: {latitude: latitude, longitude: longitude},
      success: success
    });
 });
}, false);

function success(data) {
  console.log(data)
  $('#page').append(JSON.stringify(data));
}
