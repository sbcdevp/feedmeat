import React, { Component } from 'react';
import MapBox from './MapBox';
// import { NavLink } from 'react-router-dom';
export default class ResultRestaurant extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="container__restaurant">
                <div className="container__restaurant--map">
                    <MapBox/>
                </div>
                <div className="container__restaurant--topHint">
                    <div className="container__restaurant--topHint-header">sss</div>
                    <div className="container__restaurant--topHint-redo">
                        <button className=""><i className="fa fa-redo"></i>Un autre ?</button>
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
                            <button><hr/></button>
                        </div>
                        <div className="container__restaurant--info-content-title">
                            <h1>Anatolien</h1>
                        </div>
                        <div className="container__restaurant--info-content-addressAndDistance">
                            <div className="container__restaurant--info-content-addressAndDistance-addresse">
                                5 rue Saint-Bernard <br/>
                                Paris - 75011
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
                                À propos du restaurant
                            </div>
                            <div className="container__restaurant--info-content-about-text">
                                Mokonuts est un modeste coffee shop où l’on peut bâfrer, un bon gros cookie pâtissé par la géniale luciole japonaise, Moko Hirayama.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
