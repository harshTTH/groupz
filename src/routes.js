import React from 'react';
import {Route,Switch} from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import Chat from './components/Chat';

const routes = () => (
  <Switch>
    <Route exact path="/" component={LogIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/chat" component={Chat}/>
  </Switch>
);

export default routes;
