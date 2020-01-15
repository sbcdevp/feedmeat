import React from 'react'
import './style.sass'

const NameRestaurant = (props) => {
    return (
        <React.Fragment>
            <div className="name js-title-restaurant">
                <h1>{props.currentRestaurant.name.split('-').join(' ')}</h1>
            </div>
        </React.Fragment>
    )
}
export default NameRestaurant;