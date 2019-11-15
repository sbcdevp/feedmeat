import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';

import HomePage from './components/HomePage';
import ResultRestaurant from './components/ResultRestaurant'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            render={({ location }) => {
              return (
                <Switch>
                  <Route exact path='/' render={routerProps => {
                    return <HomePage {...routerProps} />
                  }
                  } />
                  <Route path={`/:id`} render={routerProps => {
                    return <ResultRestaurant {...routerProps} />
                  }
                  } />
                </Switch>
              );
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
}
