import React, {Component, useEffect} from 'react';
import MapBox from './MapBox';
import Shuffle from './Shuffle';
import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import {UserContext} from "../reducer/Reducer";


const ResultRestaurant = (props) => {
    const {state, dispatch} = React.useContext(UserContext);
    const resultRestaurant = state.userRestaurant.currentRestaurantNear;

    const delay = (ms) => new Promise(resolve =>
        setTimeout(resolve, ms)
    );

    const handleChangeCurrentRestaurant = () => {
        // dispatch({type: 'GET_ANOTHER_RESTAURANT_NEAR'});
        // props.history.push('/'+`${resultRestaurant.name}`)
        dispatch({type: 'GET_ANOTHER_RESTAURANT_NEAR'});
        props.history.push('/'+`${state.userRestaurant.currentRestaurantNear.name}`)
    };

    return (
        <div className="container__restaurant">
            <div className="container__restaurant--map">
                <MapBox/>
            </div>
            <div className="container__restaurant--topHint">
                <div className="container__restaurant--topHint-header">sss</div>
                <div className="container__restaurant--topHint-redo">
                    <button className="" onClick={() => handleChangeCurrentRestaurant()}>
                        <i className="fa fa-redo"></i>Un autre ?
                    </button>
                </div>
            </div>
            <div className="container__restaurant--bottomHint">
                <div className="container__restaurant--bottomHint-calling">
                    <button className=""><i className="fa fa-phone"></i>Réservation</button>
                </div>
                <div className="container__restaurant--bottomHint-footer">sss</div>
            </div>
            <div className="container__restaurant--info">
                <div className="container__restaurant--info-header">
                    <div className="container__restaurant--info-header-stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                    </div>
                    <div className="container__restaurant--info-header-action">
                        <button><i className="fa fa-location-arrow"></i></button>
                    </div>
                </div>
                <div className="container__restaurant--info-content">
                    <div className="container__restaurant--info-content-expandToggle">
                        <button>
                            <hr/>
                        </button>
                    </div>
                    <div className="container__restaurant--info-content-title">
                        <h1>{resultRestaurant.name.split('-').join(' ')}</h1>
                    </div>
                    <div className="container__restaurant--info-content-addressAndDistance">
                        <div className="container__restaurant--info-content-addressAndDistance-addresse">
                            {resultRestaurant.street} <br/>
                            {resultRestaurant.city} - {resultRestaurant.postalCode}
                        </div>
                        <div className="container__restaurant--info-content-addressAndDistance-distance">
                            480 mètres
                        </div>
                    </div>
                    <div className="container__restaurant--info-content-price">
                        <div className="container__restaurant--info-content-price-title">
                            Les prix
                        </div>
                        <div className="container__restaurant--info-content-price-value">
                            Menu midi à 42 €, carte blanche en 7 étapes à 80 €.
                        </div>
                    </div>
                    <hr/>
                    <div className="container__restaurant--info-content-about">
                        <div className="container__restaurant--info-content-about-title">
                            Plat culte
                        </div>
                        <div className="container__restaurant--info-content-about-text">
                            {resultRestaurant.bestFood}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ResultRestaurant);
