import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { ASYNC_START, ASYNC_END, USER_SIGN_IN } from '../constants/actionTypes';
import { firebaseApp } from '../utilities/firebaseUtil';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.submitForm = () => {
      const { email, password } = this.state;
      this.props.onSubmit(email, password);
    }
  }
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment padded>
            <Form>
              <Header textAlign='center' as='h2'>Log In</Header>
              <Divider section />
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='Password' />
              </Form.Field>
              <Button color='teal' fluid type='submit'>Log in</Button>
              <Divider horizontal>Or</Divider>
              <Button basic color='teal' fluid>Sign Up Now</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
