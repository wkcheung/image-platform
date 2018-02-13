import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Checkbox, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { USER_SIGN_UP } from '../constants/actionTypes'

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => {
    const payload = { user: {email: email, password: password, token: "ABC"} }; //tmp
    dispatch({ type: USER_SIGN_UP, payload })
  }
});

class SignUp extends Component {
  constructor (props) {
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
            <Form onSubmit={this.submitForm} >
              <Header className='padding-t-4' textAlign='center' as='h2'>Sign Up</Header>
              <Divider section />
              <Form.Field>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Email'
                  onChange = {(event) => this.setState({email: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type='password'
                  placeholder='Create a Password'
                  onChange = {(event) => this.setState({password: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button color='teal' fluid type='submit'
                disabled={ this.props.inProgress } >
                Sign up
              </Button>
              <Divider horizontal>Or</Divider>
              <Button basic color='teal' fluid>
                <Link to="/sign-in">
                  Already a member? Log in
                </Link>
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
