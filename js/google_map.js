
var map;

function initialize() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.751966, lng: -96.975627},
    zoom: 18
  });

  var marker = new google.maps.Marker({
  map: map,
  place: {
    placeId: 'ChIJfdlKD02EToYRgLM5p6XG9KU',
    }
    });

  // Search for Google's office in Australia.
 // var request = {
 //   location: map.getCenter(),
 //   radius: '500',
 //   query: 'Iglesia de Dios Grand Prairie'
  // };

  //var service = new google.maps.places.PlacesService(map);
  //service.textSearch(request, callback);
//}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
// function callback(results, status) { });
}

google.maps.event.addDomListener(window, 'load', initialize);