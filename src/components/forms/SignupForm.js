import React from 'react';
import {PropTypes} from 'prop-types'
import {Link} from  'react-router-dom';
import {Form,Button,Grid,Popup,Message} from 'semantic-ui-react';

const SignupForm = (props) => (
  <Grid id="frm" columns={2} centered container>
    <Grid.Row>
        <Grid.Column id="frm-clmn">
          <Form onSubmit={props.handleSubmit} style={{'padding':'5%'}} loading={props.loading}
          error={props.error}>

            <Form.Group widths='equal'>
              <Form.Input name="name" label="Enter Name" placeholder="John"
                type='text' onChange={props.handleChange} value={props.name} required fluid/>

              <Popup
                trigger={<Form.Input name="mobile" label="Enter Mobile Number"    placeholder="+91-1234567890" onChange={props.handleChange}
                type='tel' value={props.mobile} required fluid error={props.errMob}/>}
                content='Invalid Mobile Number'
                open={props.errMob}
                position='right center'
              />

            </Form.Group>

            <Popup
              trigger={<Form.Input name="email" label="Enter Email" placeholder="example@example.com" onChange={props.handleChange} value={props.email} required fluid error={props.errEmail}/>}
              content='Invalid Email'
              open={props.errEmail}
              position='right center'
            />

            <Form.Group widths='equal'>
              <Popup
                trigger={<Form.Input name="pass" label="Enter Password" onChange={props.handleChange} type="password" placeholder="Enter Password" value={props.pass} required fluid error={props.errPass}/>}
                content='Password Must contain digits and letters ,size more than 8'
                open={props.errPass}
                position='left center'
              />
              <Popup
                  trigger={<Form.Input name="cnfrmPass" label="Confirm Password" onChange={props.handleChange} type="password" placeholder="Enter Password Again" value={props.cnfrmPass} required error={props.errCnfrmPass} fluid/>}
                  content="Password Didn't match"
                  open={props.errCnfrmPass}
                  position='right center'
              />
            </Form.Group>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column floated="left" width={5}>
                  <Button size='large' inverted color='green' type="submit">SignUp</Button>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                  <Link to="/">Already Have An Account</Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Message header="Error Occurred" error content="Please Try Again !"/>
          </Form>
        </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SignupForm;

SignupForm.propTypes = {
  name:PropTypes.string.isRequired,
  mobile:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  pass:PropTypes.string.isRequired,
  cnfrmPass:PropTypes.string.isRequired,
  loading:PropTypes.bool.isRequired,
  errEmail:PropTypes.bool.isRequired,
  errMob:PropTypes.bool.isRequired,
  errPass:PropTypes.bool.isRequired,
  errCnfrmPass:PropTypes.bool.isRequired,
  error:PropTypes.bool.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired
}