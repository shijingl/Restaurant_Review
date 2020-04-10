class DBHelperTest {
    static get DATABASE_URL_Test() {
        const port = 8081 // Change this to your server port
    
        if(isHosted){
          return 'https://shijingl.github.io/Restaurant_Review/data/restaurants.json'
        }
        return `http://localhost:${port}/data/restaurants.json`;
    }

    static mapMarkerForRestaurantTest(restaurant, map) {
        // https://leafletjs.com/reference-1.3.0.html#marker  
        const marker = new L.marker([restaurant.latlng.lat, restaurant.latlng.lng],
          {title: restaurant.name,
          alt: restaurant.name,
          url: `./restaurant.html?id=${restaurant.id}`
          })
          marker.addTo(newMap);
        return marker;
    } 
}

// let isHosted = (window.location.hostname === "shijingl.github.io") ? 'true' : '' ;