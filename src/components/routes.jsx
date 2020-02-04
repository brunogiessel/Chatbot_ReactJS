import React from 'react'
import { Router, Switch, Route } from "react-router";

import Login from './login'
import App from '../chatbot/app'
import {history} from './history'
import NotFound from './notfound'
import PrivateRoute from './privateroute'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/" />
            <PrivateRoute component={App} exact path="/app"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes