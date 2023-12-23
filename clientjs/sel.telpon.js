//-selektor telpon-->


function geoPon() {
	const ponLink = document.querySelector('#pon-link');
	const ponstatus = document.querySelector('#ponstatus');

	

	ponLink.href = '';
	ponstatus.textContent = '';

	function success(position) {
	  const nomer  = $('#t4_nocus_jsa').val();
	 
	
	
	  status.textContent = '';
	ponLink.href = `tel:${nomer}`;
	ponstatus.innerHTML = '<img  src="bwi.png"style="height: 100px;width:100px">';

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
	

	
