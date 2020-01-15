import React from 'react';
import './style.sass'

const NoteRestaurant = (props) => {
    return (
        <div className="note">
            <div>note: {props.currentRestaurant.note} / 5</div>
        </div>
    )
}
export default NoteRestaurant;
