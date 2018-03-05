import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import ChatMessage from './ChatMessage';
import {fetchMessages} from '../actions/members';
import {logout} from '../actions/auth';

class ChatWindow extends React.Component{
  constructor(props,context){
    super(props);
    this.state = {
      messages:[],
      typingName:"",
      error:false
    }
    this.socket = context.socket;
    this.socket.on('msgRec',(data)=>{
      this.setState((prvsMessage)=>(
        {
          messages:[...prvsMessage.messages,data],
          typingName:"",
        }
      ))
    })
    this.socket.on('typing',(name)=>{
      this.setState({typingName:name});
    })
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.token)
    .then(messages=>this.setState({messages}))
    .catch(()=>{
      this.setState({error:true});
      setTimeout(this.props.logout.bind(null,this.context.history),2000);
    });
    if(!this.state.error)this.scrollToBottom();
  }

  componentDidUpdate() {
    if(!this.state.error)this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render(){
    return(
      <div>
        {this.state.error ? (<Message negative icon="warning circle" content="Something Went Wrong Reload or Relogin"/>):
        (
          <div id="chatWindow">
            {this.state.messages.map((msg)=>(
                <ChatMessage name={msg.name} message={msg.message} key={msg._id} time={msg.createdAt}/>
                )
              )
            }
            {
              this.state.typingName && <span style={{'fontSize':'1.1em','fontWeight':'400'}}>{this.state.typingName} is Typing ....</span>
            }
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}/>
          </div>
        )
        }
      </div>
    );
  }
}

ChatWindow.propTypes = {
    fetchMessages:PropTypes.func.isRequired,
    logout:PropTypes.func.isRequired,
    token:PropTypes.string.isRequired
}

ChatWindow.contextTypes = {
  socket:PropTypes.object,
  history:PropTypes.object
}

const mapStateToProps = (state) => ({
  token:state.user.token
})
export default connect(mapStateToProps ,{fetchMessages,logout})(ChatWindow);
