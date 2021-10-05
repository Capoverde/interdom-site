var requestOptions = {
    method: 'GET',
  };
  
  fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=a6d4654b5cbc4269af75712542e0d453", requestOptions)
    .then(response => response.json())
    .then(result => console.log('map result', result))
    .catch(error => console.log('error', error));