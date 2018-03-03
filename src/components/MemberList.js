import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List} from 'semantic-ui-react';
import io from 'socket.io-client';
import {fetchUsers, changeStatus} from '../actions/members';
import Member from './Member';

class MemberList extends React.Component{
  constructor(props){
    super(props);

    this.socket = io('http://localhost:3000/',{forceNew:false});
    this.socket.on('statusOn',(email)=>props.changeStatus(email,1));
    this.socket.on('statusOff',(email)=>props.changeStatus(email,-1));
  }
  componentDidMount(){
    this.props.fetchUsers(this.props.meEmail);
  }
  render(){
    return(
      <List id="memList" style={{"height":this.props.height}}>
          {this.props.userList && this.props.userList.map((user,index)=>(
            <Member
              key={index}
              name={user.name}
              email={user.email}
              status={user.socket[0] !== 0}
            />
          ))}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  userList:state.members.users,
  meEmail:state.user.email
})

MemberList.propTypes = {
  height:PropTypes.string.isRequired,
  userList:PropTypes.arrayOf(PropTypes.shape(
    {
      name:PropTypes.string
    })
  ),
  fetchUsers:PropTypes.func.isRequired,
  changeStatus:PropTypes.func.isRequired,
  meEmail:PropTypes.string.isRequired
}

MemberList.defaultProps = {
  userList:null
}

export default connect(mapStateToProps ,
  {fetchUsers, changeStatus})(MemberList);
