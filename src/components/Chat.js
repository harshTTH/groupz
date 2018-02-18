import React from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Chat = ({isConfirmed}) => (
        <div>
            {!isConfirmed &&
            <Message style={{"marginTop":"10px"}}info>
                <Message.Header>Verify Your Email</Message.Header>
            </Message>}
            <h1>Chat Window</h1>
        </div>
);

const mapStateToProps = (state) =>({
    isConfirmed:!!state.user.isConfirmed
})

Chat.propTypes = {
    isConfirmed:PropTypes.bool.isRequired
}
export default connect(mapStateToProps)(Chat);
