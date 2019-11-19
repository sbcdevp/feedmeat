import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MapBox from './MapBox';
import UserProvider from '../provider/UserProvider';
import UserContext from '../provider/UserContext';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    shuffleRestaurant = () => {
        // get Restaurant
        const { Restaurants } = this.props.Restaurants
        let rand = Restaurants[Math.floor(Math.random() * Restaurants.length)];

        //get Position
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        })

        // change page
    }
    render() {
        return (
            <UserContext.Consumer>
                {({ latitude, longitude }) => (
                    <div className="container__home">
                        <NavLink to={{ pathname: `/:id` }}>
                            <div className="container__home--logo">
                                <div className="container__home--logo-imgContainer">
                                    <img src="https://res.cloudinary.com/dgxpb4jhs/image/upload/v1573822753/feedmeat-logo_yebqdz.png"></img>
                                </div>
                            </div>
                            <div className="container__home--shuffle">
                                <div className="container__home--shuffle-content">
                                    Cliquez sur l'écran pour découvrir un bon restaurant à moins de 800 mètres
                            </div>
                            </div>
                        </NavLink>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}