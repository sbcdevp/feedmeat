import React from 'react';

import UserContext from './UserContext'

export default class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }
    componentDidMount() {
        this.getPosition()
    }
    getPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        })
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}