import React from 'react';
import {Message, Button, Icon, Label} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ChatPage = ({isConfirmed,handleResendEmail,clicked,status}) => (<div>
  {
    !isConfirmed && (<Message inf="inf" style={{
        "marginTop" : "10px"
      }}>
      <Message.Header>Verify Your Email
        <Button size="small" style={{
            'margin' : '10px'
          }} compact="compact" primary="primary"
          onClick={handleResendEmail}>Resend Email</Button>
        {
          clicked && !status &&
          (<Icon name="circle notched" loading={true}/>)
        }
        {
          clicked && status &&
          (<Label color="green" size="medium">
            <Icon name="checkmark"/>
            Mail Sent
          </Label>
          )
        }
      </Message.Header>
    </Message>)
  }
  <h1>Chat Window</h1>
</div>);

ChatPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  handleResendEmail:PropTypes.func.isRequired,
  status:PropTypes.bool.isRequired,
  clicked:PropTypes.bool.isRequired
}

export default ChatPage;
