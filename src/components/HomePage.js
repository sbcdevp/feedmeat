import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MapBox from './MapBox';
import UserProvider from '../reducer/UserProvider';
import { UserContext } from '../reducer/Reducer.js';
import Shuffle from './Shuffle';

const HomePage = () => {
    const { state, dispatch } = React.useContext(UserContext);

    return <div className="container__home">
        {console.log("state.userGeolocation", state.userGeolocation)}
        {state.userGeolocation.latitude ?
            <NavLink to={{ pathname: `/${state.userRestaurant.currentRestaurantNear.name}` }}>
                <div className="container__home--logo">
                    <div className="container__home--logo-imgContainer">
                        <img src="https://res.cloudinary.com/dgxpb4jhs/image/upload/v1573822753/feedmeat-logo_yebqdz.png" />
                    </div>
                </div>
                <div className="container__home--shuffle">
                    <div className="container__home--shuffle-content">
                        Cliquez sur l'écran pour découvrir un bon restaurant à moins de 800 mètres
                    </div>
                </div>
                }
            </NavLink>
            : null
            //to do transition
        }
    </div>
}

export default HomePage;
