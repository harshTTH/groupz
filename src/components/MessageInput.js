import React from 'react';
import {Form,Icon} from 'semantic-ui-react';

class MessageInput extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Form>
        <Form.Group id="msgInput" inline required>
          <Form.Input width={10}/>
          <Form.Button icon color="blue" labelPosition="right">
            <Icon name="send"/>
            Send
          </Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default MessageInput;
