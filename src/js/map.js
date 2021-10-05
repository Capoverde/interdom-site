// --- DOM variables --- //

// const map = document.querySelector('.my-map')
const myAPIKey = "a6d4654b5cbc4269af75712542e0d453"
var map = L.map("my-map").setView([48.1500327, 11.5753989], 10);



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
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
    apiKey: myAPIKey,
    maxZoom: 20,
    id: 'osm-bright',
}).addTo(map);