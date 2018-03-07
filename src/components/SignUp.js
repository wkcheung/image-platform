import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Form, Header, Popup, Segment } from 'semantic-ui-react';
import firebaseUtil from '../utilities/firebaseUtil';
import { USER_SIGN_UP } from '../constants/actionTypes';

const popupTimeoutLength = 10000;
const EMAIL_FIELD = 'EMAIL_FIELD';
const PASSWORD_FIELD = 'PASSWORD_FIELD';
const AGREE_TO_TERMS_FIELD = 'AGREE_TO_TERMS_FIELD';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => {
    const payload = firebaseUtil.Auth.signUp(email, password);
    dispatch({ type: USER_SIGN_UP, payload });
  }
});

class SignUp extends Component {
  constructor (props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          agreeToTerms: false,
          isEmailPopupOpen: false,
          isPasswordPopupOpen: false,
          isAgreeToTermsPopupOpen: false
      };
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
        case AGREE_TO_TERMS_FIELD:
          this.setState({ isAgreeToTermsPopupOpen: false })
          break;
      }
    }, popupTimeoutLength)
  }

  submitForm() {
    if (!this.state.email) {
      this.setState({ isEmailPopupOpen: true })
    } else if (!this.state.password) {
      this.setState({ isPasswordPopupOpen: true })
    } else if (!this.state.agreeToTerms) {
      this.setState({ isAgreeToTermsPopupOpen: true })
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
            <Header className='padding-t-4' textAlign='center' as='h2'>Sign Up</Header>
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
                placeholder='Create a Password'
                onChange = {(event) => this.setState({password: event.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Popup
                trigger={
                  <Checkbox
                    label='I agree to the Terms and Conditions'
                    onChange = {(event) => this.setState({agreeToTerms: !this.state.agreeToTerms})}
                  />
                }
                position='top right'
                content="Please agree to the Terms and Conditions"
                open={this.state.isAgreeToTermsPopupOpen}
                onOpen={(AGREE_TO_TERMS_FIELD) => this.handleOpenPopup(AGREE_TO_TERMS_FIELD)}
              />
            </Form.Field>
            <Button color='teal' fluid type='submit'
              disabled={ this.props.inProgress } >
              Sign up
            </Button>
            <Divider horizontal>Or</Divider>
            <Link to="/sign-in">
              <Button basic color='teal' fluid>
                Already a member? Log in
              </Button>
            </Link>
          </Form>
        </Segment>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
