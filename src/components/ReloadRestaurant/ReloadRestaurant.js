

import React from 'react';
import './style.sass'

const ReloadRestaurant = (props) => {
    return (
        <div className="reload">
            <button className="" onClick={props.onChange}>
                <i className="fa fa-redo"></i>Un autre ?
            </button>
        </div>
    )
}
export default ReloadRestaurant;