import React, { createContext, useReducer, useState, useEffect } from 'react';
import Restaurants from '../restaurants.json'
import getData from './getData'


// const getUserGeolocation = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//         // userGeolocation = { latitude: position.coords.latitude, longitude: position.coords.longitude }
//         userGeolocation = { latitude: 48.8543, longitude: 2.38186 }
//     });
//     return userGeolocation
// };

// var userGeolocation = getUserGeolocation()

// const getAllRestaurantsNear = () => {
//     return Restaurants.Restaurants;
// };

// let userLocInterval = setInterval(() => {
//     if (userGeolocation !== undefined) {
//         calcPositionRestaurants(allRestaurantsNearInitial, userGeolocation);
//         clearInterval(userLocInterval);
//     }
// }, 0)

// const calcPositionRestaurants = (Restaurants, userGeolocation) => {
//     let latRestaurant, longRestaurant, rand = [];

//     if (userGeolocation !== undefined) {
//         for (let index = 0; index < Restaurants.length; index++) {
//             latRestaurant = Restaurants[index].latitude
//             longRestaurant = Restaurants[index].longitude
//             if (userGeolocation.latitude - 0.0005 < latRestaurant && userGeolocation.latitude + 0.0005 > latRestaurant && userGeolocation.longitude + 0.0005 > longRestaurant && userGeolocation.longitude - 0.0005 < longRestaurant) {
//                 rand.push(Restaurants[index])
//                 getOneRestaurantNear(rand[0])
//             }
//         }
//     }
// }
// const getOneRestaurantNear = (Restaurants, Restaurant) => {
//     let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];
//     return rand;
// };

// console.log(getData)
// const allRestaurantsNearInitial = getAllRestaurantsNear()

// const initialState = {
//     userGeolocation: {},
//     userRestaurant: {
//         allRestaurantsNear: allRestaurantsNearInitial,
//         currentRestaurantNear: getOneRestaurantNear(allRestaurantsNearInitial)
//     }
// }

const userReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        // case 'GET_ANOTHER_RESTAURANT_NEAR':
        //     const restaurants = state.userRestaurant.allRestaurantsNear
        //     return {
        //         ...state, userRestaurant: {
        //             currentRestaurantNear: getOneRestaurantNear()
        //         }
        //     };
        case 'IS_DATA_READY':
            return { ...state, userGeolocation: state.userGeolocation };
        default:
            return state;
    }
}

export const UserContext = createContext(getData.initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, getData.initialState);

    useEffect(() => {
        console.log(getData)
        let geoInterval = setInterval(() => {
            if (getData.initialState.userGeolocation) {
                dispatch({ type: 'IS_DATA_READY' });
                clearInterval(geoInterval);
            }
        }, 0)
    }, [getData.initialState])


    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
