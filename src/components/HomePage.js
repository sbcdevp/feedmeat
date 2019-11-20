import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MapBox from './MapBox';
import UserProvider from '../provider/UserProvider';
import UserContext from '../provider/UserContext';
import Shuffle from './Shuffle';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    shuffleRestaurant() {
        this.shuffleComponent = new Shuffle()
        return this.shuffleComponent.getOneRestaurant()
    }
    getUserPosition() {
        this.shuffleComponent = new Shuffle()
        return this.shuffleComponent.getUserPosition()
    }
    render() {
        return (
            <div className="container__home">
                {/* <NavLink to={{ pathname: `/${this.shuffleRestaurant()}` }}> */}
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
                )}
                {/* </NavLink> */}
            </div>
        )
    }
}
