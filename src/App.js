import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';

import HomePage from './components/HomePage';
import ResultRestaurant from './components/ResultRestaurant'
import Restaurants from './restaurants.json'
import { UserProvider } from './reducer/Reducer.js';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route
                        render={({ location }) => {
                            return (
                                <Switch>
                                    <Route exact path='/'>
                                        <UserProvider>
                                            <HomePage />
                                        </UserProvider>
                                    </Route>
                                    <Route path={`/:name`}>
                                        <UserProvider>
                                            <ResultRestaurant />
                                        </UserProvider>
                                    </Route>
                                </Switch>
                            );
                        }}
                    />
                </div>
            </BrowserRouter>
        )
    }
}
