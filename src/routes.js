import React from 'react';
import {Switch} from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import UserRoute from './components/Routes/UserRoute';
import GuestRoute from './components/Routes/GuestRoute';
import Chat from './components/Chat';

const routes = () => (
  <Switch>
    <GuestRoute exact path="/" component={LogIn}/>
    <GuestRoute path="/signup" component={SignUp}/>
    <UserRoute path="/chat" component={Chat}/>
  </Switch>
);

export default routes;
