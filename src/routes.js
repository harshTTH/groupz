import React from 'react';
import {Route,Switch} from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';

const routes = () => (
  <Switch>
    <Route exact path="/" component={LogIn}/>
    <Route path="/signup" component={SignUp}/>
  </Switch>
);

export default routes;
