import React from 'react';
import {Message, Button, Icon, Label,Grid,Responsive,Dropdown} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MemberList from './MemberList'
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

const ChatPage = ({
  isConfirmed,
  handleResendEmail,
  clicked,
  status,name}) => (<Grid style={{"margin":"-14px"}} divided>
    <Grid.Row>
      <Grid.Column width={12}>
      {
        !isConfirmed && (<Message inf="inf">
          <Message.Header>Verify Your Email
            <Button size="small" style={{
                'margin' : '10px'
              }} compact="compact" primary="primary"
              onClick={handleResendEmail}>Resend Email</Button>
            {
              clicked && !status &&
              (<Icon name="circle notched" loading/>)
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
      <ChatWindow />
      <MessageInput name={name}/>
    </Grid.Column>
    <Responsive as={Grid.Column} width={4} minWidth={768}>
      <MemberList height="80vh"/>
    </Responsive>
  </Grid.Row>
  <Responsive maxWidth={767}>
    <Grid.Row id="memListBtn">
      <Dropdown
        button icon="talk" className="circular inverted blue huge icon"
        upward floating scrolling pointing="top right">
        <Dropdown.Menu>
          <Dropdown.Item>
            <MemberList height="auto"/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Grid.Row>
  </Responsive>
</Grid>);

ChatPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  handleResendEmail:PropTypes.func.isRequired,
  status:PropTypes.bool.isRequired,
  clicked:PropTypes.bool.isRequired,
  name:PropTypes.string.isRequired
}

export default ChatPage;
