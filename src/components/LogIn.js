import React from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from './forms/LoginForm';
import {login} from '../actions/auth';

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      pass:"",
      loading:false,
      error:{
        email:false,
        global:false
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(){
    const load = validator.isEmail(this.state.email);
    this.setState({
      loading:load,
      error:{email:!load}
    })
    if(load){
      this.props.login({email:this.state.email,pass:this.state.pass}).then(()=>this.props.history.push('/'))
      .catch((err)=>{
        this.setState(
          {
            error:{global:true},
            loading:false
          }
        )
      });
    }
  };
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render(){
    return(
      <LoginForm
        email   =   {this.state.email}
        pass    =   {this.state.pass}
        loading =   {this.state.loading}
        error   =   {this.state.error}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
      />
    );
  }
}

LogIn.propTypes =  {
  login:PropTypes.func.isRequired,
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired
}
export default connect(null,{login})(LogIn);
