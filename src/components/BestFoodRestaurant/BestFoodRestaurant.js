import React from 'react';
import './style.sass'


const BestFoodRestaurant = (props) => {
    return (
        <div className="bestFood js-about-restaurant">

            <div className="bestFood-title">
                Plat culte
                        </div>

            <div className="bestFood-dish">
                {props.currentRestaurant.bestFood}
            </div>
        </div>
    )
}
export default BestFoodRestaurant;