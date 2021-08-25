/* eslint-disable react/prop-types */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home/Loadable';
import Login from 'pages/Login';
import Cats from 'pages/Cats';
import NotFound from 'pages/NotFound/Loadable';

import { isAuthenticated } from 'utils/auth';

isAuthenticated();

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default function App() {
  return (
    <div>
      <Switch>
        <UnauthenticatedRoute exact path="/login" component={Login} />
        <AuthenticatedRoute exact path="/" component={Home} />
        <AuthenticatedRoute exact path="/cats" component={Cats} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
