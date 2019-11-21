import React, { createContext, useReducer, useState, useEffect } from 'react';
import Restaurants from '../restaurants.json'


const getUserGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        userGeolocation = { latitude: position.coords.latitude, longitude: position.coords.longitude }
    });
    return userGeolocation
};

var userGeolocation = getUserGeolocation()

const getAllRestaurantsNear = () => {
    return Restaurants.Restaurants;
};

const getOneRestaurantNear = (Restaurants) => {
    let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];
    return rand;
};


const allRestaurantsNearInitial = getAllRestaurantsNear()

const initialState = {
    userGeolocation: {},
    userRestaurant: {
        allRestaurantsNear: allRestaurantsNearInitial,
        currentRestaurantNear: getOneRestaurantNear(allRestaurantsNearInitial)
    }
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ANOTHER_RESTAURANT_NEAR':
            const restaurants = state.userRestaurant.allRestaurantsNear
            return {
                ...state, userRestaurant: {
                    currentRestaurantNear: getOneRestaurantNear(allRestaurantsNearInitial)
                }
            };
        case 'SET_USER_GEOLOCATION':
            return { ...state, userGeolocation: userGeolocation };
        default:
            return state;
    }
}

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        let geoInterval = setInterval(() => {
            if (userGeolocation !== undefined) {
                dispatch({ type: 'SET_USER_GEOLOCATION' });
                console.log('cc')
                clearInterval(geoInterval);
            }
        }, 0)
    }, [userGeolocation])


    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
