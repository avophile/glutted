const MyPosition = {
    getPosition(){
        if (navigator.geolocation){ // device can return its location
            navigator.geolocation.getCurrentPosition(function(position) {
                 let latCoords=position.coords.latitude;
                 let longCoords=position.coords.longitude;
                 console.log(position.coords.latitude);
                 console.log(position.coords.longitude);
                 return(latCoords, longCoords);
            })
        } else { 
          console.log ("Geolocation is not supported by this browser.");
        }
    }
      /*
    showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
/*
    calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = (lat2 - lat1).toRad();
        var dLon = (lon2 - lon1).toRad(); 
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        var d = R * c;
        return d;
      }

      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }*/
};

