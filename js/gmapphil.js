// // Add Google Maps
// function myMap() {
// var myCenter = new google.maps.LatLng(14.599512, 120.984222);
// var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// var marker = new google.maps.Marker({position:myCenter});
// marker.setMap(map);
// }

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(14.599512, 120.984222); 
  var mapOptions = {center: myCenter, zoom: 12, scrollwheel:false, draggable:false,};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}