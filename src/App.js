import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import Animation from './animations/animations';
import HomePage from './components/HomePage';
import ResultRestaurant from './components/ResultRestaurant'
import { UserProvider } from './reducer/Reducer.js';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route
                        render={({ location }) => {

                            const { pathname, key } = location;
                            let animation = new Animation();

                            return (
                                <TransitionGroup component={null}>
                                    <Transition
                                        key={key}
                                        appear={true}
                                        onEnter={(node, appears) => animation.play(pathname, node, appears)}
                                        onExit={(node, appears) => animation.exit(pathname, node, appears)}
                                        timeout={{ enter: 1050, exit: 1500 }}>
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
                                    </Transition>
                                </TransitionGroup>
                            );
                        }}
                    />
                </div>
            </BrowserRouter>
        )
    }
}
