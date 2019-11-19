import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class UserPosition extends Component {
    constructor(props) {
        super(props)
        const MyContext = React.createContext({ value: '' });
        const value = "Hello Contexte";
        this.state = {
            latitude: 0,
            longitude: 0
        }
        // Plus loin dans la hiérarchie de vos composants
        // Vous consommer le store de votre contexte
    }
    componentDidMount() {
    }
    render() {
        return (
            <UserPosition.Provider value={this.state}>
                {this.props.children}
                {console.log(this.props.children)}
            </UserPosition.Provider>
        );
    }
}