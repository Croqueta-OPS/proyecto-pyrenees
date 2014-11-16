$(document).ready(function() {
    
    $('.botonRuta').click(function() { 
       
        var ruta;
        
        console.log(this.id);
        
        if (this.id == "btn1") {
            ruta = "0";
        }
        else if (this.id == "btn2") {
            ruta = "1";
        }
        else {
            ruta = "3";
        }
        
        var data = [];
        
        data.push({
            "coordX": "42.517900",
            "coordY": "0.487161",
            "nombre": "Castejón de Sos",
            "rutas": [
                "0"
            ]
        });
       
        data.push({
            "coordX": "42.596378",
            "coordY": "0.534065",
            "nombre": "Cerler",
            "rutas": [
                "0"
            ]
        });
        
        data.push({
            "coordX": "42.636421",
            "coordY": "0.517750",
            "nombre": "P. Natural Posets-Maladeta",
            "rutas": [
                "0"
            ]
        });
        
        data.push({
            "coordX": "42.647004",
            "coordY": "0.655587",
            "nombre": "Aneto",
            "rutas": [
                "0"
            ]
        });
        
        data.push({
            "coordX": "42.699950",
            "coordY": "0.931268",
            "nombre": "Baqueira",
            "rutas": [
                "1"
            ]
        });
        
        data.push({
            "coordX": "42.653532",
            "coordY": "0.964175",
            "nombre": "Naut Aran",
            "rutas": [
                "1"
            ]
        });
        
        data.push({
            "coordX": "42.572714",
            "coordY": "1.017428",
            "nombre": "Els Encantats",
            "rutas": [
                "1"
            ]
        });
        
        data.push({
            "coordX": "42.576297",
            "coordY": "1.083428",
            "nombre": "Espot",
            "rutas": [
                "1"
            ]
        });
		
		var arrayRuta = [];
		
		data.forEach(function(element, index, array) {
		    
		    element.rutas.forEach(function(elemen, inde, array) {
		         
		        if (elemen == ruta) {
		       
        	    	arrayRuta.push(element);
        		
		        }
		    
		    });
		    
		    if (ruta == "3") {
		        arrayRuta.push(element);
		    }
		    
		});
		
		var waypoints = [];
		
        function calcRoute() {
            
            var start =  new google.maps.LatLng(arrayRuta[0].coordX, arrayRuta[0].coordY);
            var end =  new google.maps.LatLng(arrayRuta[arrayRuta.length - 1].coordX, arrayRuta[arrayRuta.length - 1].coordY);
            
            if (arrayRuta.length > 2) {
                
                arrayRuta.forEach(function(element, index, array) {
                    
                    if (index != 0 && index != arrayRuta.length - 1) {
                
                        waypoints.push({
                            location:new google.maps.LatLng(arrayRuta[index].coordX, arrayRuta[index].coordY),
                            stopover:true
                        });
                        
                    }
                
                });
            }
            
            var request = {
                origin:start,
                destination:end,
                waypoints: waypoints,
                travelMode: google.maps.TravelMode.WALKING
            };
            
            directionsService.route(request, function(response, status) {
                
                if (status == google.maps.DirectionsStatus.OK) {
                    
                    directionsDisplay.setDirections(response);
                    
                }
                
            });
        
        }
        
        calcRoute();
        
        var rutaHtml = "<div><h2>"+arrayRuta[0].nombre+" - "+arrayRuta[arrayRuta.length - 1].nombre+"</h2>";
        
        arrayRuta.forEach(function(element, index, array) {
            
            rutaHtml += "<p>"+(index + 1)+") "+element.nombre+"</p>";
            
        });
        
        rutaHtml += "</div>";
        	    
        $("#ruta").html(rutaHtml);

    });
    
});