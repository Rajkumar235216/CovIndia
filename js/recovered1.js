function updateMap() {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        data.forEach(element => {
          latitude = element.countryInfo.lat;
          longitude = element.countryInfo.long;
  
          recovered = element.recovered;
  
          new mapboxgl.Marker({
  
            color: "rgb(0, 255, 0)"
          })
          .setLngLat([longitude, latitude])
          .addTo(map);
  
        });
      })
      .catch(error => {
        console.log("Error")
    })
  }
  
  updateMap();