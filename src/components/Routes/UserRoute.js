import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserRoute = ({isAuthenticated, component:Component, ...rest}) => (
        <Route {...rest} render={
            (props)=>
            isAuthenticated?<Component {...props}/>:<Redirect to="/" />
        }/>
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = (state) => ({
    isAuthenticated:!!state.user.token
})

export default connect(mapStateToProps)(UserRoute);
