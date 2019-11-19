import React, { Component } from 'react';
import MapBox from './MapBox';
import Shuffle from './Shuffle';

import { NavLink } from 'react-router-dom';
export default class ResultRestaurant extends Component {
    constructor(props) {
        super(props)
    }
    displayRestaurant() {
        const { match, Restaurants } = this.props;
        this.restaurant = Restaurants.Restaurants.filter((restaurant) => {
            return restaurant.name === match.params.name
        })[0];
    }
    shuffleRestaurant() {
        this.shuffleComponent = new Shuffle()
        this.displayRestaurant()
        return this.shuffleComponent.getOneRestaurant()
    }
    render() {
        const { Restaurants } = this.props
        return (
            <div className="container__restaurant">
                <div className="container__restaurant--map">
                    <MapBox />
                </div>
                <div className="container__restaurant--topHint">
                    <div className="container__restaurant--topHint-header">sss</div>
                    <div className="container__restaurant--topHint-redo">
                        <NavLink to={{ pathname: `/${this.shuffleRestaurant()}` }}>
                            <button className=""><i className="fa fa-redo"></i>Un autre ?</button>
                        </NavLink>
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
                            <button><hr /></button>
                        </div>
                        <div className="container__restaurant--info-content-title">
                            <h1>{this.restaurant.name.split('-').join(' ')}</h1>
                        </div>
                        <div className="container__restaurant--info-content-addressAndDistance">
                            <div className="container__restaurant--info-content-addressAndDistance-addresse">
                                {this.restaurant.street} <br />
                                {this.restaurant.city} - {this.restaurant.postalCode}
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
                        <hr />
                        <div className="container__restaurant--info-content-about">
                            <div className="container__restaurant--info-content-about-title">
                                Plat culte
                            </div>
                            <div className="container__restaurant--info-content-about-text">
                                {this.restaurant.bestFood}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
