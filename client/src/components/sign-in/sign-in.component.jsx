import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
  googleSignInStart, 
  twitterSignInStart, 
  emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';


const SignIn = ({ emailSignInStart, googleSignInStart, twitterSignInStart }) => {
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

  return(
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

       <form onSubmit={ handleSubmit }>
          <FormInput 
            name='email' 
            type='email' 
            value={ email }
            handleChange={ handleChange } 
            required
          label='Email' 
        />
        
        <FormInput 
          name='password' 
          type='password' 
          value={ password } 
          handleChange={ handleChange }
          required
          label='Password' 
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
        </div>
        <div className='buttons'>
          <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn >
            {' '} Sign in with Google{' '}
          </CustomButton>
        </div>
        <div className='buttons'>
          <CustomButton type='button' onClick={ twitterSignInStart } isTwitterSignIn >
            {' '}Sign in with Twitter{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  ); 
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  twitterSignInStart: () => dispatch(twitterSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);