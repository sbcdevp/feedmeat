import React, {createContext, useReducer, useState} from 'react';
import Restaurants from '../restaurants.json'

var userGeolocation = null ;
const getUserGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        // this.setState({ userGeolocation:{latitude: position.coords.latitude, longitude: position.coords.longitude} })
        userGeolocation = {latitude: position.coords.latitude, longitude: position.coords.longitude}
        // console.log(userGeolocation)
    });
    return userGeolocation
};

const getAllRestaurantsNear = () => {
    return Restaurants.Restaurants;
};

const getOneRestaurantNear = (Restaurants) => {
    let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];
    // return rand.name.replace(" ", "-");
    return rand;
};


const allRestaurantsNearInitial = getAllRestaurantsNear()
const userGeolocationInitial = userGeolocation;

const initialState = {
    userGeolocation: {userGeolocationInitial},
    userRestaurant: {
        allRestaurantsNear: allRestaurantsNearInitial,
        currentRestaurantNear: getOneRestaurantNear(allRestaurantsNearInitial)
    }
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ANOTHER_RESTAURANT_NEAR':
            return {
                ...state, userRestaurant: {
                    currentRestaurantNear: getOneRestaurantNear(state.allRestaurantsNear)
                }
            };
        default:
            return state;
    }
}

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
