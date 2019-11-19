import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Restaurants from '../restaurants.json'

export default class Shuffle {
    constructor() {
        this.restaurants = Restaurants.Restaurants;
    }
    getUserPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.userPos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })

    }
    getAllRestaurant() {
        const { Restaurants } = this.restaurants
        return Restaurants;
    }
    getOneRestaurant() {
        let rand = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
        // change page
        let resultRestaurant = rand.name.replace(" ", "-")
        return resultRestaurant;
    }
}