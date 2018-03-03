import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button,Grid,Message,Header,Icon,Popup} from 'semantic-ui-react';

const PasswordResetForm = (props) => (
  <div id="main-cont">
      <Grid id="frm" columns={2} centered inverted container>
          <Grid.Row>
              <Grid.Column id='frm-clmn'>
                {props.error && <Message header="Something Went Wrong !" negative style={{'margin':'10px'}} />}

                {
                  props.success ?
                  (
                    <Message success icon style={{"padding":"5%","margin":"2% 0 2% 0"}}>
                      <Icon name="checkmark" />
                      <Message.Content>
                        <Message.Header>
                          Password Changed Successfully
                        </Message.Header>
                      </Message.Content>
                    </Message>
                  )
                  :
                  (<Form onSubmit={props.handleSubmit}
                      style={{'padding':'5%'}}
                      loading={props.loading}>

                      <Header as='h3'
                        attached='top'
                        style={{'marginBottom':'20px'}}>
                        <Icon name='user' />
                        <Header.Content>
                          Reset Password
                        </Header.Content>
                      </Header>

                      <Popup
                        trigger={<Form.Input name="pass" label="Enter Password" onChange={props.handleChange} type="password" placeholder="Enter Password" value={props.pass} required fluid error={props.errPass}/>}
                        content='Password Must contain digits and letters ,size more than 8'
                        open={props.errPass}
                        position='right center'
                      />
                      <Form.Input
                        onChange={props.handleChange}
                        type="password"
                        value={props.cnfrmPass}
                        name="cnfrmPass"
                        label="Confirm Password"
                        placeholder="Enter Password Again"
                        required fluid attached
                        error={props.errCnfrmPass}/>

                      {props.errCnfrmPass  && <Message content="Password Didn't Match" negative />}

                      <Grid stackable>
                        <Grid.Row>
                          <Grid.Column width={4}>
                            <Button inverted color='blue' type="submit">Reset Password</Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Form>
                  )
                }
              </Grid.Column>
          </Grid.Row>
      </Grid>
  </div>
)

PasswordResetForm.propTypes = {
  cnfrmPass:PropTypes.string.isRequired,
  pass:PropTypes.string.isRequired,
  success:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.bool.isRequired,
  errPass:PropTypes.bool.isRequired,
  errCnfrmPass:PropTypes.bool.isRequired,
  handleChange:PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
}

export default PasswordResetForm;
