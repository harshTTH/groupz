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
  getChildContext() {
   return {socket: this.socket, history:this.props.history};
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
        name={this.props.name}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  isConfirmed: !!state.user.confirmed,
  token : state.user.token,
  email: state.user.email,
  name:state.user.name
})

Chat.propTypes = {
  resendEmail:PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  token:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  history:PropTypes.object.isRequired
}

Chat.childContextTypes = {
  socket:PropTypes.object,
  history:PropTypes.object
}
export default connect(mapStateToProps,{resendEmail})(Chat);
