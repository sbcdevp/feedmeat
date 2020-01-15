import Restaurants from '../restaurants.json'
class getData {
    constructor() {
        this.initialState = {
            userGeolocation: {},
            userRestaurant: {
                currentRestaurantNear: {}
            }
        }
        let geoInterval = setInterval(() => {
            this.getUserGeolocation()
            this.calcPositionRestaurants(Restaurants.Restaurants)

            if (this.initialState.userGeolocation !== undefined && this.initialState.userRestaurant.currentRestaurantNear > 0) {
                clearInterval(geoInterval);
            }
        }, 0)
        //     this.getUserGeolocation()
        //     }
    }

    getUserGeolocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.initialState.userGeolocation = { latitude: position.coords.latitude, longitude: position.coords.longitude }
            // this.initialState.userGeolocation = { latitude: 48.8543, longitude: 2.38186 }
        });
    };


    getAllRestaurantsNear() {
        return Restaurants.Restaurants;
    };

    calcPositionRestaurants(Restaurants, userGeolocation) {
        let latRestaurant, longRestaurant, rand = [];
        for (let index = 0; index < Restaurants.length; index++) {
            latRestaurant = Restaurants[index].latitude
            longRestaurant = Restaurants[index].longitude
            if (this.initialState.userGeolocation.latitude - 0.005 < latRestaurant && this.initialState.userGeolocation.latitude + 0.005 > latRestaurant && this.initialState.userGeolocation.longitude + 0.005 > longRestaurant && this.initialState.userGeolocation.longitude - 0.005 < longRestaurant) {
                this.initialState.userRestaurant.currentRestaurantNear = Restaurants[index]
            }
            else {
                this.initialState.userRestaurant.currentRestaurantNear = Restaurants[0]
            }
        }
    }

    getOneRestaurantNear() {
        // let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];
        console.log(this.initialState.userRestaurant.currentRestaurantNear)
        return this.initialState.userRestaurant.currentRestaurantNear;
    };
    getLoadedState() {
        return this.initialState
    }

}
export default new getData()

