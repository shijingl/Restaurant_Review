class DBHelperTest {
    static get DATABASE_URL_Test() {
        const port = 8081 // Change this to your server port
    
        if(isHosted){
          return 'https://shijingl.github.io/Restaurant_Review/data/restaurants.json'
        }
        return `http://localhost:${port}/data/restaurants.json`;
      }
}