import React from 'react';
import './style.sass'

const PriceRestaurant = (props) => {
    return (
        <div className="price js-price-restaurant">
            <div className="price-title">
                Les prix
            </div>
            <div className="price-value">
                Le prix moyen par personne dans ce restaurant est de {props.currentRestaurant.averagePrice} €
            </div>
        </div>
    )
}
export default PriceRestaurant;