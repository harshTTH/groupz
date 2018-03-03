import React from 'react';
import {Link} from  'react-router-dom';
import {Form,Button,Grid,Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LoginForm = (props) =>(
    <div>
        <Grid id="frm" columns={2} centered inverted container>
            <Grid.Row>
                <Grid.Column id='frm-clmn'>

                  {props.error.global && <Message header="Something Went Wrong" content="Invalid Credentials"  negative style={{'margin':'10px'}} />}
                  <Form onSubmit={props.handleSubmit}
                    style={{'padding':'5%'}}
                    loading={props.loading}>

                    <Form.Input
                      name="email"
                      label="Enter Email"
                      placeholder="example@example.com"
                      onChange={props.handleChange}
                      value={props.email}
                      required fluid/>

                    {props.error.email  && <Message content="Invalid Email" negative />}

                    <Form.Input name="pass" label="Enter Password" onChange={props.handleChange} type="password" placeholder="Enter Password" value={props.pass} required fluid/>
                    <Grid stackable>
                      <Grid.Row>
                        <Grid.Column width={4}>
                          <Button inverted color='blue' type="submit">LogIn</Button>
                        </Grid.Column>
                        <Grid.Column>
                          <Link to="/reset">Forgot Password</Link>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);


export default LoginForm;

LoginForm.propTypes = {
  email   :   PropTypes.string.isRequired,
  pass    :   PropTypes.string.isRequired,
  loading :   PropTypes.bool.isRequired,
  error   :   PropTypes.object.isRequired,
  handleChange : PropTypes.func.isRequired,
  handleSubmit : PropTypes.func.isRequired,
};
