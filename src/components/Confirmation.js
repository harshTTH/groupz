import React from 'react';
import {Message, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {confirm} from '../actions/auth';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      success: false,
      message:""
    }
  }

  componentDidMount(){
    this.props.confirm(this.props.match.params.token)
    .then(()=>this.setState({loading:false, success:true}))
    .catch((err)=>{this.setState({loading:false, success:false, message:err.response.data.error})})
  }

  render() {
    const {loading, success} = this.state;
    return (
    <div>
      {
        loading && <Message icon={true}>
            <Icon name="circle notched" loading={true}/>
            <Message.Header>Validating your email</Message.Header>
          </Message>
      }
      {
        !loading && success && (
          <Message success icon>
          <Icon name="checkmark" />
          <Message.Content>
            <Message.Header>
              Thank you. Your account has been verified.
            </Message.Header>
            <Link to="/chat">Go to your Account</Link>
          </Message.Content>
        </Message>
        )
      }
      {
        !loading && !success && (
          <Message negative icon>
            <Icon name="warning sign" />
            <Message.Content>
              <Message.Header>{this.state.message}</Message.Header>
            </Message.Content>
          </Message>
        )
      }
    </div>);
  }
}

export default connect(null,{confirm})(Confirmation);
