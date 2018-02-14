import React from 'react';
import {Link} from  'react-router-dom';
import validator from 'validator';
import {Form,Button,Grid,Message} from 'semantic-ui-react';
import axios from 'axios';

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      pass:"",
      errMsg:"Invalid E-mail Address !",
      loading:false,
      error:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    let load = validator.isEmail(this.state.email);
    this.setState({
      loading:load,
      error:!load
    })
    if(load){
      axios({
        method: 'post',
        url   : '/login',
        data  : {
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
          errMsg:"Error Occurred !",
          error:true,
          loading:false
        })
        console.log(this.state);
      }.bind(this));
    }
  };
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render(){
    return(
      <Grid id="frm" columns={2} centered inverted container>
        <Grid.Row>
            <Grid.Column id='frm-clmn'>
              <Form onSubmit={this.handleSubmit} style={{'padding':'5%'}} loading={this.state.loading} error={this.state.error}>

                <Form.Input name="email" label="Enter Email" placeholder="example@example.com" onChange={this.handleChange} value={this.state.email} error={this.state.error} required fluid/>

                <Message error content={this.state.errMsg}/>

                <Form.Input name="pass" label="Enter Password" onChange={this.handleChange} type="password" placeholder="Enter Password" value={this.state.pass} required fluid/>
                <Grid stackable>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Button inverted color='green' type="submit">LogIn</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Link to="#">Forgot Password</Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LogIn;
