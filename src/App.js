import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';

import HomePage from './components/HomePage';
import ResultRestaurant from './components/ResultRestaurant'
// import FontAwesomeIcon from '@fontawesome/fontawesome-free'
import Restaurants from './restaurants.json'
import UserProvider from './provider/UserProvider';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="app">
          <Route
            render={({ location }) => {
              return (
                <Switch>
                  <Route exact path='/' render={routerProps => {
                    return <HomePage {...routerProps} Restaurants={Restaurants} />
                  }
                  } />
                  <Route path={`/:name`} render={routerProps => {
                    return <ResultRestaurant {...routerProps} Restaurants={Restaurants} />
                  }
                  } />
                </Switch>
              );
            }}
          />
        </div>
      </BrowserRouter >
    )
  }
}
