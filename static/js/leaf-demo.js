var MEX = [];
var FAST_FOOD = [];
var PIZZA= [];
var SANDWICH = [];
var AMERICAN = [];

// Geo position IP finder (server must be enabled before use)
// var pos = L.GeoIP.getPosition();
// L.GeoIP.centerMapOnPosition(myMap);

// Loop through locations and create city and state markers
for (var i = 0; i < mexican.length; i++) {
	var popup = mexican[i].name +
              '<br/>' + mexican[i].category +
              '<br/><b>rating:</b> ' + mexican[i].rating + ' stars' +
              '<br/><b>addr:</b> ' + mexican[i].address; 
	
  // Setting the marker radius for the state by passing population into the markerSize function
  MEX.push(
    L.circleMarker([mexican[i].lat,mexican[i].lng],
	{color:"red",radius:mexican[i].rating*3}).bindPopup(popup)
);
}

for (var i = 0; i < fastfood.length; i++) {
	var popup = fastfood[i].name +
              '<br/>' + fastfood[i].category +
              '<br/><b>rating:</b> ' + fastfood[i].rating + ' stars' +
              '<br/><b>addr:</b> ' + fastfood[i].address;
	
  FAST_FOOD.push(
    L.circleMarker([fastfood[i].lat,fastfood[i].lng],
	{color:"green",radius:fastfood[i].rating*3}).bindPopup(popup)
);
}

for (var i = 0; i < pizza.length; i++) {
	var popup = pizza[i].name +
              '<br/>' + pizza[i].category +
              '<br/><b>rating:</b> ' + pizza[i].rating + ' stars' +
              '<br/><b>addr:</b> ' + pizza[i].address;
	
  PIZZA.push(
    L.circleMarker([pizza[i].lat,pizza[i].lng],
	{color:"blue",radius:pizza[i].rating*3}).bindPopup(popup)
);
}


for (var i = 0; i < sandwich.length; i++) {
	var popup = sandwich[i].name +
             '<br/>' + sandwich[i].category +
             '<br/><b>rating:</b> ' + sandwich[i].rating + ' stars' +
             '<br/><b>addr:</b> ' + sandwich[i].address;
	
 SANDWICH.push(
   L.circleMarker([sandwich[i].lat,sandwich[i].lng],
	  {color:"yellow",radius:sandwich[i].rating*3}).bindPopup(popup)
);
}

for (var i = 0; i < american.length; i++) {
	var popup = american[i].name +
             '<br/>' + american[i].category +
             '<br/><b>rating:</b> ' + american[i].rating + ' stars' +
             '<br/><b>addr:</b> ' + american[i].address;
	
 AMERICAN.push(
   L.circleMarker([american[i].lat,american[i].lng],
	  {color:"purple",radius:american[i].rating*3}).bindPopup(popup)
);
}
// Define variables for our base layers
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/ozkar/ck2z6q6h72eyd1cmtm084dkrh/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1Ijoib3prYXIiLCJhIjoiY2sydjVkYmFyMDB6MjNobzN5d3h0YWo0dyJ9.bmh0jz1RRr2djPQTiM0T1Q");


// Create two separate layer groups: one for cities and one for states
var mex = L.layerGroup(MEX);
var fastfood = L.layerGroup(FAST_FOOD);
var pizza = L.layerGroup(PIZZA);
var sandwich = L.layerGroup(SANDWICH);
var american = L.layerGroup(AMERICAN);

// Create a baseMaps object
var baseMaps = {
  "Restaurants": streetmap
};

// Create an overlay object
var overlayMaps = {
  "MEXICAN": mex,
  "FASTFOOD": fastfood,
  "PIZZA": pizza,
  "SANDWICH": sandwich,
  "AMERICAN": american
  
};

// Define a map object
var myMap = L.map("map", {
  center: [29.76, -95.36],
  zoom: 10,
  layers: [streetmap, mex, fastfood, pizza, sandwich, american]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
