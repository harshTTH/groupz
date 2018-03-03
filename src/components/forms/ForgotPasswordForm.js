import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button,Grid,Message,Header,Icon} from 'semantic-ui-react';

const ForgotPasswordForm = (props) => (
  <div id="main-cont">
      <Grid id="frm" columns={2} centered inverted container>
          <Grid.Row>
              <Grid.Column id='frm-clmn'>
                {props.error && <Message header="Account with this Email Not Found !" negative style={{'margin':'10px'}} />}

                {
                  props.success ?
                  (
                    <Message success icon style={{"padding":"5%","margin":"2% 0 2% 0"}}>
                      <Icon name="checkmark" />
                      <Message.Content>
                        <Message.Header>
                          Mail Sent!
                        </Message.Header>
                        <p>Check your mail for more instructions !</p>
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
                          Forgot Password
                        </Header.Content>
                      </Header>

                      {props.errorEmail  && <Message content="Invalid Email" negative />}

                      <Form.Input
                        onChange={props.handleChange}
                        name="email"
                        label="Enter Email"
                        placeholder="example@example.com"
                        required fluid attached
                        error={props.errorEmail}/>

                      <Grid stackable>
                        <Grid.Row>
                          <Grid.Column width={4}>
                            <Button inverted color='blue' type="submit">Forgot Password</Button>
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
);

ForgotPasswordForm.propTypes = {
  success:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.bool.isRequired,
  errorEmail:PropTypes.bool.isRequired,
  handleChange:PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
}
export default ForgotPasswordForm;
