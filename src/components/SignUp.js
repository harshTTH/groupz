import React from 'react';
import validator from 'validator';
import axios from 'axios';
import SignupForm from './forms/SignupForm'

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      mobile:'',
      email:'',
      pass:'',
      cnfrmPass:'',
      loading:false,
      errEmail:false,
      errMob:false,
      errPass:false,
      errCnfrmPass:false,
      error:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    if(this.state.pass !== this.state.cnfrmPass){
      this.setState({errCnfrmPass:true})
    }else if(this.state.errPass){}
    else{
      this.setState({
        errCnfrmPass:false,
        loading:true
      });
      axios({
        method: 'post',
        url   : '/signup',
        data  : {
          name  : this.state.name,
          mobile: this.state.mobile,
          email : this.state.email,
          pass  : this.state.pass
        },
        timeout : 15000,
        withCredentials:true, 
      })
      .then(function respRecieve(data){
        this.setState({
          loading:false
        });
        console.log(data);
      }.bind(this))
      .catch(function respFailed(error){
        this.setState({
          error:true,
          loading:false
        })
      }.bind(this));
    }
  };
  handleChange(e){

    switch(e.target.name){
      case 'email':
        this.setState({
          errEmail:!validator.isEmail(e.target.value),
          email:e.target.value
        });
      break;
      case 'mobile':
        this.setState({
          errMob:!validator.isMobilePhone(e.target.value,'any'),
          mobile:e.target.value
        });
      break;
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
      <SignupForm
        name={this.state.name}
        mobile={this.state.mobile}
        email={this.state.email}
        pass={this.state.pass}
        cnfrmPass={this.state.cnfrmPass}
        loading={this.state.loading}
        errEmail={this.state.errEmail}
        errMob={this.state.errMob}
        errPass={this.state.errPass}
        errCnfrmPass={this.state.errCnfrmPass}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default SignUp;


