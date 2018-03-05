import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Popup} from 'semantic-ui-react';

const formatTime = (date) =>{
  const d = new Date(date);
  return( `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}
  ${d.getHours()}:${d.getMinutes()}`);
}

const ChatMessage = (props) => {
  let msgPlace;
  if(props.name === props.ownName){
    msgPlace={
      'alignSelf': 'flex-end',
      'paddingRight':'2%',
      'paddingLeft':'0.5%'
    }
  }else msgPlace={
    'alignSelf': 'flex-start',
    'paddingLeft':'2%',
    'paddingRight':'0.5%'
  }
  return(
    <Popup
      trigger={
        <div id="chatMsg" style={msgPlace}>
          <span id="sender">{props.name}   :  </span>
          <span id="msg">{props.message}</span>
        </div>
      }
      content={formatTime(props.time)}
      inverted
    />
  );
};

ChatMessage.propTypes = {
  name:PropTypes.string.isRequired,
  message:PropTypes.string.isRequired,
  ownName:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  ownName:state.user.name
})

export default connect(mapStateToProps)(ChatMessage);
