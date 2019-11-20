import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Restaurants from '../restaurants.json'

export default class Shuffle {
    constructor() {
        this.restaurants = Restaurants.Restaurants;
        this.userPos = {
            latitude: 0,
            longitude: 0
        }
    }

    getUserPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.userPos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })
        return this.userPos;
    }

    getAllRestaurant() {
        return this.restaurants;
    }

    getOneRestaurant() {
        let rand = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
        // change page
        let resultRestaurant = rand.name.replace(" ", "-")
        return resultRestaurant;
    }

}