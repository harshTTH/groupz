import React from 'react';
import PropTypes from 'prop-types';
import {Message,Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {verifyLink, resetPassReq} from '../actions/auth';
import PasswordResetForm from './forms/PasswordResetForm';

class PasswordResetPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading:false,
      passChanged:false,
      success:false,
      error:false,
      pass:'',
      cnfrmPass:'',
      errPass:false,
      errCnfrmPass:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    if(!this.state.success){
      this.props.verifyLink(this.props.match.params.resetToken)
      .then(()=>this.setState({loading:false,success:true,error:false}))
      .catch(()=>this.setState({loading:false,success:false,error:true}))
    }
  }

  handleSubmit(){
    if(this.state.pass !== this.state.cnfrmPass){
      this.setState({errCnfrmPass:true})
    }else if(!this.state.errPass){
      this.setState({
        errCnfrmPass:false,
        loading:true,
        error:false
      });
      this.props.resetPassReq(this.props.match.params.resetToken,             this.state.pass)
      .then(()=>this.setState({loading:false,passChanged:true,error:false}))
      .catch(()=>this.setState({loading:false,passChanged:false,error:true}))
    }
  }
  handleChange(e){
    switch(e.target.name){
      case 'pass':
        this.setState({
          errPass:e.target.value.length<=8,
          pass:e.target.value
        });
      break;
      default:
      this.setState({
        [e.target.name]:e.target.value
      })
    }
  }

  render(){
    return(
      <div>
        {this.state.loading && !this.state.success && !this.state.error &&   <Message icon>
          <Icon name="circle notched" loading/>
          <Message.Header>Doing Work.</Message.Header>
        </Message>}

        {!this.state.loading && this.state.success && !this.state.error &&
        <PasswordResetForm
          success={this.state.passChanged}
          pass={this.state.pass}
          cnfrmPass={this.state.cnfrmPass}
          loading={this.state.loading}
          errPass={this.state.errPass}
          errCnfrmPass={this.state.errCnfrmPass}
          error={this.state.error}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />}

        {!this.state.loading && !this.state.success && this.state.error &&
          <Message negative icon>
            <Icon name="warning sign" />
            <Message.Content>
              <Message.Header>Invalid Token !</Message.Header>
            </Message.Content>
          </Message>}
      </div>
    );
  }
}

PasswordResetPage.propTypes = {
  verifyLink:PropTypes.func.isRequired,
  resetPassReq:PropTypes.func.isRequired,
  match:PropTypes.shape({
    params:PropTypes.shape({
      resetToken:PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
export default connect(null, {verifyLink,resetPassReq})(PasswordResetPage);
