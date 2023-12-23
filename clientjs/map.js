



  
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
 
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  var tileLayer = new L.TileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png');
  
  
  var mymap = new L.Map('mapid', {
  'center': [location.coords.latitude, location.coords.longitude],
  'zoom': 15,
  'layers': [tileLayer]
  });
 





//var marker = 
L.marker([location.coords.latitude, location.coords.longitude],{
  
draggable: true
}).
//on('click', markerOnClick).
addTo(mymap)
.bindPopup(' <button  type="button" class="btn btn-success" data-toggle="modal" data-target="#loginModal" >Masuk</button> <hr><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal" onclick="ambilDataTerakhir()">Daftar</button> <hr>')

/*
marker.on('click', function () {
updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});

marker.on({
click: function (e) {
$("#feature-title").html(myMarkerTitle);
$("#feature-info").html(myMarkerContent);
$("#featureModal").modal("show");
}
}); 
function markerOnClick(e)
{
alert("hi. you clicked the marker at " + e.latlng);
}
*/
/*
function updateLatLng(lat,lng,reverse) {
if(reverse) {
marker.setLatLng([lat,lng]);
map.panTo([lat,lng]);
} else {
document.getElementById('latitude').value = marker.getLatLng().lat;
document.getElementById('longitude').value = marker.getLatLng().lng;

}
}$(function () {
  $('#ModalUpdate').on('click', function () {
      var text = $('#t4_longclient_jsa');
      text.val(document.getElementById('longitude').value); 
      var text = $('#t4_latclient_jsa');
      text.val(document.getElementById('latitude').value);    
      
  });
});
*/
});

  

  /*
 var mymap = L.map('mapid').setView(latlng, 15)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: '',

id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
}).addTo(mymap);

  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
var tileLayer = new L.TileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png');


var mymap = new L.Map('mapid', {
'center': [location.coords.latitude, location.coords.longitude],
'zoom': 15,
'layers': [tileLayer]
});


*/
