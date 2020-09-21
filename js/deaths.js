function updateMap() {
    fetch("https://www.trackcorona.live/api/provinces")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
              
                deaths = element.dead;
                
                new mapboxgl.Marker({
                    
                    color: "rgb(255, 255, 0)"
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