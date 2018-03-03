import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import UserRoute from './components/Routes/UserRoute';
import GuestRoute from './components/Routes/GuestRoute';
import Chat from './components/Chat';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import PasswordResetPage from './components/PasswordResetPage';
import Confirmation from './components/Confirmation';

const routes = () => (
  <Switch>
    <GuestRoute exact path="/" component={LogIn}/>
    <GuestRoute path="/signup" component={SignUp}/>
    <UserRoute path="/chat" component={Chat}/>
    <Route exact path="/confirmation/:token" component={Confirmation}/>
    <Route exact path="/reset" component={ForgotPasswordPage}/>
    <Route exact path="/reset/:resetToken" component={PasswordResetPage}/>
  </Switch>
);

export default routes;
