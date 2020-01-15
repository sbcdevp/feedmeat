import React from 'react';
import './style.sass'

const PhoneRestaurant = (props) => {
    return (
        <div className="calling">
            <a href={`tel:${props.currentRestaurant.phoneNumber}`} className="button"><i className="fa fa-phone"></i>Réservation</a>
        </div>
    )
}

export default PhoneRestaurant;