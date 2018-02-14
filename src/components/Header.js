import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Button,Menu} from 'semantic-ui-react';

const Header  = () => (
  <Menu id='head-nav' inverted stackable>
    <Menu.Item header as={NavLink} to="/">
        <span style={{'fontSize':'1.5em'}}>Groupz</span>
      </Menu.Item>
      <Menu.Item position='right'>
        <Button as={Link} to="/signup" inverted>SignUp</Button>
      </Menu.Item>
  </Menu>
);

export default Header;
