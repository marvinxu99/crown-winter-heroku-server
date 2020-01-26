import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  twitterSignInStart,
  githubSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';


const SignIn = ({ emailSignInStart, googleSignInStart, twitterSignInStart, githubSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          required
          label='Email'
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          required
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
        </div>
        <br></br>
        <div className='buttons'>
          <CustomButton type='button' onClick={googleSignInStart} isOAuthSignIn>
            Sign in with Google
          </CustomButton>
        </div>
        <div className='buttons'>
          <CustomButton type='button' onClick={twitterSignInStart} isOAuthSignIn>
            Sign in with Twitter
          </CustomButton>
        </div>
        <div className='buttons'>
          <CustomButton type='button' onClick={githubSignInStart} isOAuthSignIn>
            {'  '}Sign in with GitHub{'  '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  twitterSignInStart: () => dispatch(twitterSignInStart()),
  githubSignInStart: () => dispatch(githubSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);