import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ReactMapGL, {Popup, FlyToInterpolator, GeolocateControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoieWFveWk2IiwiYSI6ImNrMXVtY2VxbzBiYW8zaXBhazdjZjhjZ3AifQ.MueZPMq5R3Pz8a6YUJAuXQ';

const geolocateStyle = {
    position: 'absolute',
    top: '15vh',
    right: 0,
    margin: 10,
    zIndex: 900
};

export default class MapBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopup: true,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                latitude: 48.8535973,
                longitude: 2.3809063,
                zoom: 14
            }
        };
    }

    componentDidMount() {
    }

    _displayRestaurant = (longitude, latitude) => {
        const viewport = {...this.state.viewport, longitude: longitude, latitude: latitude};
        this.setState({viewport});
    }

    render() {
        return (
            <div>
                <ReactMapGL {...this.state.viewport}
                            onViewportChange={(viewport) => this.setState({viewport})}
                            transitionDuration={100}
                            transitionInterpolator={new FlyToInterpolator()}
                            mapboxApiAccessToken={TOKEN}>
                    <GeolocateControl
                        style={geolocateStyle}
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                        showUserLocation={true}
                    />
                            {this.state.showPopup && <Popup
                                latitude={48.8535973}
                                longitude={2.3809063}
                                closeButton={false}
                                closeOnClick={false}
                                onClose={() => this.setState({showPopup: false})}
                                anchor="top">
                                <div>Anatolien</div>

                    </Popup>}


                    {/*<Marker latitude={48.8535973} longitude={2.3809063} offsetLeft={-20} offsetTop={-10}>*/}
                    {/*    <div>You are here</div>*/}
                    {/*</Marker>*/}
                </ReactMapGL>
                {/*<button onClick={()=>{this._goToNYC(-74.1,40.7)}}>New York City</button>*/}
            </div>
        );
    }
}
