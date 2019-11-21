import React, { Component, useEffect, useRef } from 'react';
import MapBox from './MapBox';
import { withRouter } from 'react-router-dom'
import { UserContext } from "../reducer/Reducer";
import { TimelineMax as Timeline, Power1, Power2, Power3, TweenMax } from 'gsap';



const ResultRestaurant = (props) => {
    const { state, dispatch } = React.useContext(UserContext);
    const infoContainer = useRef(null);
    let isInfoContainerHidden = false;
    const resultUserPos = state.userGeolocation
    const resultRestaurant = state.userRestaurant.currentRestaurantNear;

    const handleChangeCurrentRestaurant = () => {
        dispatch({ type: 'GET_ANOTHER_RESTAURANT_NEAR' });
        props.history.push(`/${state.userRestaurant.currentRestaurantNear.name}`)
    };
    const distance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1 / 180;
            let radlat2 = Math.PI * lat2 / 180;
            let theta = lon1 - lon2;
            let radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "N") { dist = dist * 0.8684 }
            return dist.toFixed(2);
        }
    }
    const closeInfoContainer = () => {
        infoContainer.current.focus();
        isInfoContainerHidden = !isInfoContainerHidden
        if (isInfoContainerHidden) {
            TweenMax.to(infoContainer.current, 1.5, { y: '45vh', ease: Power3.easeInOut })
        } else {
            TweenMax.to(infoContainer.current, 1.5, { y: 0, ease: Power3.easeInOut })
        }
    }
    return (
        <div className="container__restaurant js-container-restaurant">
            <div className="container__restaurant--map">
                <MapBox />
            </div>
            <div className="container__restaurant--topHint">
                <div className="container__restaurant--topHint-redo">
                    <button className="" onClick={() => handleChangeCurrentRestaurant()}>
                        <i className="fa fa-redo"></i>Un autre ?
                    </button>
                </div>
            </div>
            <div className="container__restaurant--info" ref={infoContainer}>
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
                <div className="container__restaurant--info-content" >
                    <div className="container__restaurant--info-content-expandToggle" onClick={closeInfoContainer} >
                        <div>
                            <hr />
                        </div>
                        <div className="container__restaurant--info-content-note">
                            <div>note: {resultRestaurant.note} / 5</div>
                        </div>
                    </div>

                    <div className="container__restaurant--info-content-title js-title-restaurant">
                        <h1>{resultRestaurant.name.split('-').join(' ')}</h1>
                    </div>
                    <div className="container__restaurant--info-content-addressAndDistance js-address-restaurant">
                        <div className="container__restaurant--info-content-addressAndDistance-addresse">
                            {resultRestaurant.street} <br />
                            {resultRestaurant.city} - {resultRestaurant.postalCode}
                        </div>
                        <div className="container__restaurant--info-content-addressAndDistance-distance">
                            {`${distance(resultRestaurant.latitude, resultRestaurant.longitude, resultUserPos.latitude, resultUserPos.longitude, "K")} km`}
                        </div>
                    </div>
                    <div className="container__restaurant--info-content-price js-price-restaurant">
                        <div className="container__restaurant--info-content-price-title">
                            Les prix
                        </div>
                        <div className="container__restaurant--info-content-price-value">
                            Le prix moyen par personne dans ce restaurant est de {resultRestaurant.averagePrice} €
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="container__restaurant--info-content-about js-about-restaurant">
                        <div className="container__restaurant--info-content-about-title">
                            Plat culte
                        </div>
                        <div className="container__restaurant--info-content-about-text">
                            {resultRestaurant.bestFood}
                        </div>
                    </div>
                    <div className="container__restaurant--info-content-calling">
                        <a href={`tel:${resultRestaurant.phoneNumber}`} className="button"><i className="fa fa-phone"></i>Réservation</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ResultRestaurant);
