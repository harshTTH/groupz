import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import io from 'socket.io-client';
import {resendEmail} from '../actions/auth';
import ChatPage from './ChatPage';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status:false,
      clicked:false
    }
    this.socket = io('http://localhost:3000/',{query:"email="+props.email});
    this.handleResendEmail = this.handleResendEmail.bind(this);
  }
  handleResendEmail(){
    this.setState({
      clicked:true,
      status:false
    });
    this.props.resendEmail(this.props.token).then(status=>
      this.setState({
        status
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
  token : state.user.token,
  email: state.user.email
})

Chat.propTypes = {
  resendEmail:PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  token:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired
}
export default connect(mapStateToProps,{resendEmail})(Chat);
