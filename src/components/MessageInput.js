import React from 'react';
import {Form,Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MessageInput extends React.Component{
  constructor(props,context){
    super(props);
    this.state = {
      message:""
    }
    this.socket = context.socket;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.message){
      this.socket.emit('msgSend',{name:this.props.name,message:this.state.message})
      this.setState({message:""});
    }
  }

  handleChange(event){
    this.setState({
      message:event.target.value
    })
    this.socket.emit('typing',this.props.name);
  }
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group id="msgInput" inline>
          <Form.Input width={10} onChange={this.handleChange} value={this.state.message}/>
          <Form.Button icon color="blue" labelPosition="right">
            <Icon name="send" disabled={!!this.state.message}/>
            Send
          </Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

MessageInput.propTypes = {
  name:PropTypes.string.isRequired
}

MessageInput.contextTypes = {
  socket:PropTypes.object
}
export default MessageInput;
