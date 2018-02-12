import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Checkbox, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignUpForm = props => {
  return (
    <Segment padded>
      <Form>
        <Header className='padding-t-4' textAlign='center' as='h2'>Sign Up</Header>
        <Divider section />
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Create a Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button color='teal' fluid type='submit'>Sign up</Button>
        <Divider horizontal>Or</Divider>
        <Button basic color='teal' fluid>Already a member? Log in</Button>
      </Form>
    </Segment>
  );
}

class SignUp extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <SignUpForm />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp
