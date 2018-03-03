import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Button,Menu,Dropdown,Icon,Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import gravatar from 'gravatar';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';

class Header extends React.Component{
  constructor(props){
    super(props);
    if(props.user){
      this.url = gravatar.url(props.user.email,{s:30,d:'mm'});
    }
  }
  render(){
    const {user,logOut} = this.props;
    return(
      <Menu id='head-nav' inverted stackable>
        <Menu.Item header as={NavLink} to="/">
            <span style={{'fontSize':'1.5em'}}>Groupz</span>
          </Menu.Item>
          <Menu.Item position='right'>
            {user.token ?
                <Dropdown trigger={
                    <span style={{"fontSize":"1em"}}>
                      <Image src={this.url} avatar style={{"marginRight":"10px"}}/>{user.name}
                    </span>
                  }labeled floated>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/" onClick={logOut}>
                      <Icon name="sign out"/>Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              :
              <Button as={Link} to="/signup" inverted>SignUp</Button>
            }
          </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
        user:state.user
})

Header.propTypes = {
    user:PropTypes.shape({
      name:PropTypes.string.isRequired,
      email:PropTypes.string.isRequired
    }).isRequired,
    logOut:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{logOut:logout})(Header);
