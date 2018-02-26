import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import api from  '../api';
import ChatPage from './ChatPage';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status:false,
      clicked:false
    }
    this.handleResendEmail = this.handleResendEmail.bind(this);
  }

  handleResendEmail(){
    this.setState({
      clicked:true,
      status:false
    });
    api.user.resend(this.props.token).then(status=>
      this.setState({
        status:status
      })
    )
  }
  render(){
    return(
      <ChatPage
        isConfirmed={this.props.isConfirmed}
        handleResendEmail= {this.handleResendEmail}
        status = {this.state.status}
        clicked = {this.state.clicked}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  isConfirmed: !!state.user.confirmed,
  token : state.user.token
})

Chat.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  token:PropTypes.string.isRequired
}
export default connect(mapStateToProps)(Chat);
