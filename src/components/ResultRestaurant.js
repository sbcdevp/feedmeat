import React from 'react';
import { withRouter } from 'react-router-dom'
import { UserContext } from "../reducer/Reducer";
import { TimelineMax as Power3, TweenMax } from 'gsap';

import MapBox from './MapBox/MapBox';
import NoteRestaurant from './NoteRestaurant/NoteRestaurant';
import StarsRestaurant from './StarsRestaurant/StarsRestaurant';
import AddressRestaurant from './AddressRestaurant/AddressRestaurant';
import PriceRestaurant from './PriceRestaurant/PriceRestaurant';
import PhoneRestaurant from './PhoneRestaurant/PhoneRestaurant';
import NameRestaurant from './NameRestaurant/NameRestaurant';
import BestFoodRestaurant from './BestFoodRestaurant/BestFoodRestaurant';
import ReloadRestaurant from './ReloadRestaurant/ReloadRestaurant';
import RoadRestaurant from './RoadRestaurant/RoadRestaurant';





const ResultRestaurant = () => {
    const { state, dispatch } = React.useContext(UserContext);
    const infoContainer = React.createRef();
    let isInfoContainerHidden = false;
    const resultUserPos = state.userGeolocation
    const currentRestaurant = state.userRestaurant.currentRestaurantNear;
    window.history.pushState({}, null, `/${state.userRestaurant.currentRestaurantNear.name}`)

    const handleChangeCurrentRestaurant = () => {
        dispatch({ type: 'GET_ANOTHER_RESTAURANT_NEAR' });
        window.history.pushState({}, null, `/${state.userRestaurant.currentRestaurantNear.name}`)
    };

    const closeInfoContainer = () => {
        infoContainer.current.focus();
        isInfoContainerHidden = !isInfoContainerHidden
        isInfoContainerHidden ? TweenMax.to(infoContainer.current, 1, { y: '60vh', ease: Power3.easeInOut }) : TweenMax.to(infoContainer.current, 1, { y: 0, ease: Power3.easeInOut })

    }
    return (
        <div className="container__restaurant js-container-restaurant">

            <MapBox />

            <ReloadRestaurant currentRestaurant={currentRestaurant} onChange={handleChangeCurrentRestaurant} />
            <div className="container__restaurant-info" ref={infoContainer}>



                <div className="info-content js-info-content" >
                    <StarsRestaurant currentRestaurant={currentRestaurant} />
                    <RoadRestaurant currentRestaurant={currentRestaurant} />
                    <div className="expandToggle" onClick={closeInfoContainer}>
                        <hr />
                    </div>

                    <NoteRestaurant currentRestaurant={currentRestaurant} />

                    <NameRestaurant currentRestaurant={currentRestaurant} />

                    <AddressRestaurant currentRestaurant={currentRestaurant} userPosition={resultUserPos} />

                    <PriceRestaurant currentRestaurant={currentRestaurant} />

                    <hr className="separator" />

                    <BestFoodRestaurant currentRestaurant={currentRestaurant} />
                    <PhoneRestaurant currentRestaurant={currentRestaurant} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(ResultRestaurant);
