function updateMap() {
    fetch("https://www.trackcorona.live/api/provinces")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

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