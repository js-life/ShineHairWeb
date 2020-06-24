import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

import Route from './Route'

function Routes() {
  return(
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />

        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/profile"  isPrivate component={Profile} />
    </Switch>
  );
}

export default Routes;