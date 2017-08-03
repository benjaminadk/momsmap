function CenterControl(controlDiv, map, center) {
       //BUILD CENTERING BUTTON
        var control = this;
        //ORIENT BUTTON
        control.center_ = center;
        controlDiv.style.clear = 'both';
        controlDiv.style.transform = "translatex(70px)"
       
  
      //FIND TARGET DI
        var goCenterUI = document.createElement('div');
        goCenterUI.id = 'goCenterUI';
        goCenterUI.title = 'Click to recenter the map';
        controlDiv.appendChild(goCenterUI);

        var goCenterText = document.createElement('div');
        goCenterText.id = 'goCenterText';
        goCenterText.innerHTML = 'Center Map';
        goCenterUI.appendChild(goCenterText);

        var setCenterUI = document.createElement('div');
        setCenterUI.id = 'setCenterUI';
        setCenterUI.title = 'Click to change the center of the map';
        controlDiv.appendChild(setCenterUI);
  
        var setCenterText = document.createElement('div');
        setCenterText.id = 'setCenterText';
        setCenterText.innerHTML = 'Reset  Center';
        setCenterUI.appendChild(setCenterText);

        goCenterUI.addEventListener('click', function() {
          var currentCenter = control.getCenter();
          map.setCenter(currentCenter);
        });
        setCenterUI.addEventListener('click', function() {
          var newCenter = map.getCenter();
          control.setCenter(newCenter);
        });
      }
//TRICKERY
      CenterControl.prototype.center_ = null;

      CenterControl.prototype.getCenter = function() {
        return this.center_;
      };
//SET CENTER FUNCTION
      CenterControl.prototype.setCenter = function(center) {
        this.center_ = center;
      };

var map;
 //INITIALIZE MAP     
function initMap() {
        //DEFINE CUSTOM STYLES IN LARGE ARRAY
        var styledMapType = new google.maps.StyledMapType(
        //START MAP STYLE TYPE ARRAY
          [
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fef9f2"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e9d8b1"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ded3be"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#daa4ea"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bdb2e9"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "color": "#a4a2a3"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dc848e"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c0e7c4"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#98a7ed"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fbd395"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffaf33"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffe0e2"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#fbb6ba"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b1bbf0"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b3eae6"
      }
    ]
  }
],        //DEFINE ARRAY AS STYLED MAP
          {name: "Anne's Map"});
        
//EMPTY ARRAY TO STORE DIRECTIONS        
var markerArray = [];

 //CALL AN INSTANCE OF DIRECTIONS
var directionsService = new google.maps.DirectionsService;
  
        //CREATE AN INSTANCE OF A GOOGLE MAP
        map = new google.maps.Map(document.getElementById('map'), {
          //MAP BASED ON FOLLOWING CONTROLS AND THEIR OPTIONS
           center: {lat:33.746828, lng:-118.299448},
           zoom: 13,
           rotateControl: true,
           scaleControl: true,
           mapTypeControl: true,
           mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             position: google.maps.ControlPosition.TOP_LEFT,
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    "anne's_map"]
          },
           streetViewControl: true,
               streetViewControlOptions: {
               position: google.maps.ControlPosition.LEFT_TOP},
           zoomControl: true,
               zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_TOP},
           fullscreenControl: true,
               fullscreenControlOptions: {
               position: google.maps.ControlPosition.TOP_LEFT}
     });
  var infoWindow = new google.maps.InfoWindow();
  //CALL INSTANCE OF NEW LAYER ADDING IN MY FUSION TABLE
 
        var layer = new google.maps.FusionTablesLayer({
         
  //BASED ON A QUERY TO THE FUSION DATA AND DEFINING COORDINATES
    query: {
      select: "Location",
      from: '<fusiontableid/key>'
    },
          styles: [{
  markerOptions: {
  iconName: "measle_turquoise"}}
                  ],
          styleId: 3,
          templateId: 5,
 suppressInfoWindows: true
          
  });

  google.maps.event.addListener(layer, 'click', function(e) {windowControl(e, infoWindow, map);
            });
  function windowControl(e, infoWindow, map) {
            infoWindow.setOptions({
                content: e.infoWindowHtml,
                position: e.latLng,
                pixelOffset: e.pixelOffset
            });
            infoWindow.open(map);
        }
  layer.setMap(map);

        //ADD MY CUSTOM STYLE TO THE LIST OF MAP TYPES AND SET IT TO ACTIVE
        map.mapTypes.set("anne's_map", styledMapType);
        map.setMapTypeId("anne's_map");
        //CALL AN INSTANCE OF STREET VIEW
        var panorama = new google.maps.StreetViewPanorama(
          //BASED ON COORDINATES AND ORIENTATION OF CAMERA(HEADING PITCH)
            document.getElementById('pano'), {
              position: {lat:33.714407, lng:-118.289596},
              pov: {
                heading: 90,
                pitch: 15
              }
            });
        map.setStreetView(panorama);
  
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map, "san pedro");

        centerControlDiv.index = 1;
        centerControlDiv.style['padding-top'] = '10px';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  
  // Create a renderer for directions and bind it to the map.
        var directionsDisplay = new google.maps.DirectionsRenderer({map: map});

        // Instantiate an info window to hold step text.
        var stepDisplay = new google.maps.InfoWindow;

        // Display the route between the initial start and end selections.
        calculateAndDisplayRoute(
            directionsDisplay, directionsService, markerArray, stepDisplay, map);
        // Listen to change events from the start and end lists.
        var onChangeHandler = function() {
          calculateAndDisplayRoute(
              directionsDisplay, directionsService, markerArray, stepDisplay, map);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
      }

function calculateAndDisplayRoute(directionsDisplay, directionsService,
          markerArray, stepDisplay, map) {
        // First, remove any existing markers from the map.
        for (var i = 0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
        }

        // Retrieve the start and end locations and create a DirectionsRequest using
        // WALKING directions.
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING',
          avoidHighways: true
        }, function(response, status) {
          // Route the directions and pass the response to a function to create
          // markers for each step.
           function showSteps(directionResult, markerArray, stepDisplay, map) {
        // For each step, place a marker, and add the text to the marker's infowindow.
        // Also attach the marker to an array so we can keep track of it and remove it
        // when calculating new routes.
        var myRoute = directionResult.routes[0].legs[0];
        for (var i = 0; i < myRoute.steps.length; i++) {
          var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
          marker.setMap(map);
          marker.setPosition(myRoute.steps[i].start_location);
          attachInstructionText(
              stepDisplay, marker, myRoute.steps[i].instructions, map);
        }
      }

      function attachInstructionText(stepDisplay, marker, text, map) {
        google.maps.event.addListener(marker, 'click', function() {
          // Open an info window when the marker is clicked on, containing the text
          // of the step.
          stepDisplay.setContent(text);
          stepDisplay.open(map, marker);
        });
      }
          if (status === 'OK') {
            document.getElementById('warnings-panel').innerHTML =
                '<b>' + response.routes[0].warnings + '</b>';
            directionsDisplay.setDirections(response);
            console.log(response);
            showSteps(response, markerArray, stepDisplay, map);
          } 
        });
   
  
}
