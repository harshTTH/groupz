import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import {connect} from 'react-redux';
import {forgotPass} from '../actions/auth';
import ForgotPasswordForm from './forms/ForgotPasswordForm'

class ForgotPasswordPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      success:false,
      email:"",
      error:false,
      errorEmail:false,
      loading:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(){
    const load = validator.isEmail(this.state.email);
    this.setState({
      loading:load,
      errorEmail:!load
    })
    if(load){
      this.props.forgotPass(this.state.email)
      .then(()=>this.setState({success:true,error:false}))
      .catch(()=>this.setState({error:true,loading:false}))
    }
  }
  handleChange(event){
    this.setState ({
      email:event.target.value
    });
  }
  render(){
    return(
      <ForgotPasswordForm
          success = {this.state.success}
          loading = {this.state.loading}
          error = {this.state.error}
          errorEmail = {this.state.errorEmail}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
      />
    );
  }
}

ForgotPasswordPage.propTypes = {
  forgotPass:PropTypes.func.isRequired
}
export default connect(null,{forgotPass})(ForgotPasswordPage);
