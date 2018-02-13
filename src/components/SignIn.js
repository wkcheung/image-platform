import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Checkbox, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignInForm = props => {
  return (
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
  );
}

class SignIn extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <SignInForm {...props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignIn
