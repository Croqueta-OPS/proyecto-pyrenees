var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
	
	directionsDisplay = new google.maps.DirectionsRenderer();
    
    var mapOptions = {
        center: {
            lat: 42.643838,
            lng: 0.293980
        },
        zoom: 8,
        minZoom: 8,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        panControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeId:google.maps.MapTypeId.HYBRID
    };
   
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	directionsDisplay.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);