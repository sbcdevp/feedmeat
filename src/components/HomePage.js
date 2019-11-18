import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class HomePage extends Component {
    componentDidMount() {
    }
    render() {
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