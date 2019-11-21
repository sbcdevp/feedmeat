import React, { useEffect, useRef, useState } from "react";
import { UserContext } from "../reducer/Reducer";

import MapGL, { GeolocateControl, Popup } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = 'pk.eyJ1IjoieWFveWk2IiwiYSI6ImNrMXVtY2VxbzBiYW8zaXBhazdjZjhjZ3AifQ.MueZPMq5R3Pz8a6YUJAuXQ';

const MapboxGLMap = () => {
    const { state, dispatch } = React.useContext(UserContext);

    const resultUserPos = state.userGeolocation,
        resultRestaurant = state.userRestaurant.currentRestaurantNear;

    let [viewport, setViewPort] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 48.8535973,
        longitude: 2.3809063,
        zoom: 12
    })
    const _onViewportChange = (viewport) => {
        setViewPort({ ...viewport })
    }

    return (
        <div>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={_onViewportChange}
                onUpdateUserLocation={_onViewportChange}
            >
                <Popup
                    latitude={resultRestaurant.latitude}
                    longitude={resultRestaurant.longitude}
                    closeButton={false}
                    closeOnClick={false}
                    onClose={() => this.setState({ showPopup: false })}
                    anchor="top">
                    <div>{resultRestaurant.name}</div>
                </Popup>}
            </MapGL>
        </div>
    )
}

export default MapboxGLMap