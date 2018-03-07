import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Form, Header, Popup, Segment } from 'semantic-ui-react';
import firebaseUtil from '../utilities/firebaseUtil';
import { USER_SIGN_IN } from '../constants/actionTypes';


const popupTimeoutLength = 10000;
const EMAIL_FIELD = 'EMAIL_FIELD';
const PASSWORD_FIELD = 'PASSWORD_FIELD';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => {
    const payload = firebaseUtil.Auth.signIn(email, password);
    dispatch({ type: USER_SIGN_IN, payload });
  }
});

class SignIn extends Component {
  constructor (props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          isEmailPopupOpen: false,
          isPasswordPopupOpen: false
      };

      this.handleOpenPopup = this.handleOpenPopup.bind(this);
      this.submitForm = this.submitForm.bind(this);
  }

  handleOpenPopup(field) {
    this.timeout = setTimeout(() => {
      switch (field) {
        case EMAIL_FIELD:
          this.setState({ isEmailPopupOpen: false })
          break;
        case PASSWORD_FIELD:
          this.setState({ isPasswordPopupOpen: false })
          break;
      }
    }, popupTimeoutLength)
  }

  submitForm() {
    if (!this.state.email) {
      this.setState({ isEmailPopupOpen: true })
    } else if (!this.state.password) {
      this.setState({ isPasswordPopupOpen: true })
    } else {
      const { email, password } = this.state;
      this.props.onSubmit(email, password);
    }
  }

  render() {
    return (
      <div className='fixed-center'>
        <Segment className='sign-in-sign-up-segment' padded>
          <Form onSubmit={this.submitForm} >
            <Header className='padding-t-4' textAlign='center' as='h2'>Sign In</Header>
            <Divider section />
            <Form.Field>
              <Popup
                trigger={<label>Email</label>}
                position='top left'
                content="This is a required field!"
                open={this.state.isEmailPopupOpen}
                onOpen={(EMAIL_FIELD) => this.handleOpenPopup(EMAIL_FIELD)}
              />
              <input
                placeholder='Email'
                onChange = {(event) => this.setState({email: event.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Popup
                trigger={<label>Password</label>}
                position='top left'
                content="This is a required field!"
                open={this.state.isPasswordPopupOpen}
                onOpen={(PASSWORD_FIELD) => this.handleOpenPopup(PASSWORD_FIELD)}
              />
              <input
                type='password'
                placeholder='Password'
                onChange = {(event) => this.setState({password: event.target.value})}
              />
            </Form.Field>
            <Button color='teal' fluid type='submit'
              disabled={ this.props.inProgress } >
              Sign in
            </Button>
            <Divider horizontal>Or</Divider>
            <Link to="/">
              <Button basic color='teal' fluid>
                Not a member? Sign up
              </Button>
            </Link>
          </Form>
        </Segment>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
