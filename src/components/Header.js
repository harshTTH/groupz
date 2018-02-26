import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Button,Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';

const Header  = ({isAuthenticated,logOut}) => (
  <Menu id='head-nav' inverted stackable>
    <Menu.Item header as={NavLink} to="/">
        <span style={{'fontSize':'1.5em'}}>Groupz</span>
      </Menu.Item>
      <Menu.Item position='right'>
        {isAuthenticated ?
            <Button as={Link} to="/" onClick={logOut} inverted>Logout</Button>:
            <Button as={Link} to="/signup" inverted>SignUp</Button>
        }
      </Menu.Item>
  </Menu>
);

const mapStateToProps = (state) => ({
        isAuthenticated:!!state.user.token
})

Header.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    logOut:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{logOut:logout})(Header);
