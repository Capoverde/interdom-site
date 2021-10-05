
// https://myprojects.geoapify.com/projects

// --- DOM variables --- //

// const map = document.querySelector('.my-map')
const myAPIKey = "a6d4654b5cbc4269af75712542e0d453"
var map = L.map("my-map").setView([ 51.77474848785249, 19.456612669475565], 18);



let requestOptions = {
    method: 'GET',
  };
  
  fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=a6d4654b5cbc4269af75712542e0d453", requestOptions)
    .then(response => response.json())
    .then(result => console.log('map result', result))
    .catch(error => console.log('error', error));


    var isRetina = L.Browser.retina;

    var baseUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    var retinaUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";


    // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    // attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
    apiKey: myAPIKey,
    maxZoom: 20,
    id: 'positron-blue',
}).addTo(map);


const markerIcon = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon?size=xx-large&type=material&color=%233e9cfe&icon=group&apiKey=${myAPIKey}`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
  });
  const zooMarker = L.marker([51.77474848785249, 19.456612669475565], {
    icon: markerIcon
  }).addTo(map);

  const firmMarkerPopup = L.popup().setContent("Interdom s.c.");
const firmMaker = L.marker([51.77474848785249, 19.456612669475565], {
  icon: markerIcon
}).bindPopup(zooMarkerPopup).addTo(map);


//  style

// var map = new maplibregl.Map({
//     container: 'my-map',
//     style: 'https://maps.geoapify.com/v1/styles/positron-blue/style.json?apiKey=YOUR_API_KEY',
//     id: 'positron-blue'
// });

//  map.setView([51.77474848785249, 19.456612669475565], 10);
// L.tileLayer('https://maps.geoapify.com/v1/tile/positron-blue/{z}/{x}/{y}.png?apiKey=YOUR_API_KEY', {
//   attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
//   maxZoom: 15,
//   id: 'positron-blue'
// }).addTo(map);
  