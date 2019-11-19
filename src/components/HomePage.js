import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MapBox from './MapBox';
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.newUserCoords = {
            latitude: 0,
            longitude: 0
        }
        this.getUserPosition()
    }
    componentDidMount() {
    }

    getUserPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.newUserCoords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            console.log(position)
        })
    }
    render() {
        const { Restaurants } = this.props.Restaurants
        let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];

        return (
            <div className="container__home">
                <div className="container__home--logo">
                    <div className="container__home--logo-imgContainer">
                        <img src="https://res.cloudinary.com/dgxpb4jhs/image/upload/v1573822753/feedmeat-logo_yebqdz.png"></img>
                    </div>
                </div>
                <NavLink to={{ pathname: `/1` }}>
                    <div className="container__home--shuffle">
                        <div className="container__home--shuffle-content">
                            Cliquez sur l'écran pour découvrir un bon restaurant à moins de 800 mètres
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}