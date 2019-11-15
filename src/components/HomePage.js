import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
export default class HomePage extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div class="container__home">
                <div className="container__home-imgContainer">
                    <img src="https://res.cloudinary.com/dgxpb4jhs/image/upload/v1573822753/feedmeat-logo_yebqdz.png"></img>
                </div>
            </div>
        )
    }
}