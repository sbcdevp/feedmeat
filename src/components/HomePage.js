import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../reducer/Reducer.js';

const HomePage = () => {
    const { state, dispatch } = React.useContext(UserContext);

    return <div className="container__home js-container-home">
        <div className="container__home--logo js-container-logo">
            <div className="container__home--logo-imgContainer js-logo">
                <img src="https://res.cloudinary.com/dgxpb4jhs/image/upload/v1573822753/feedmeat-logo_yebqdz.png" />
            </div>
        </div>
        <div className="container__home--shuffle js-shuffle">
            {state.userGeolocation.latitude ?
                <NavLink className='link-shuffle' to={{ pathname: `/${state.userRestaurant.currentRestaurantNear.name}` }}>
                    <div className="container__home--shuffle-content">
                        Cliquez sur l'écran pour découvrir <span className="text-bold">  un nouveau restaurant </span> à moins de 800 mètres
                    </div>
                </NavLink>
                : <div className='container__home--shuffle-content'>On tente de vous localiser !</div>
            }
        </div>
    </div>
}

export default HomePage;
