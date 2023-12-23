//--selektor lokasi -->


function geoFindMe() {

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

mapLink.href = '';
mapLink.textContent = '';

function success() {
   const latitude  = $('#t4_latclient_jsa').val();
  const longitude = $('#t4_longclient_jsa').val();
 


  status.textContent = '';
  mapLink.href = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude} `;
  mapLink.innerHTML ='<img  id="by"src="3.gif"style="height: 100px;width:100px">';
console.log(mapLink.href)
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);

}

}

