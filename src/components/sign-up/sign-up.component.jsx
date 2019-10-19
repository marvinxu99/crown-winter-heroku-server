import React from 'react';
import { connect } from 'react-redux';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart }  from '../../redux/user/user.actions';


import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
      super();
  
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
      }
    }
  
    handleSubmit = async event => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;
      const { signUpStart } = this.props;

      if (password !== confirmPassword) {
        /*alert("passwords don't match"); */
        this.setState({ errorMessage: "passwords don't match" });
        return;
      }

      signUpStart(email, password, displayName);
    }
    
    handleChange = event => {
      const { value, name } = event.target; 
      this.setState({ [name]: value });
      
      if(this.state.errorMessage) {
        this.setState({ errorMessage: '' });
      }
    }
  
    render() {
      const {displayName, email, password, confirmPassword} = this.state;
      return(
        <div className='sign-up'>
          <h2 className='title'>I do not have an account</h2>
          <span>Sign up with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
          <FormInput 
              name='displayName' 
              type='text' 
              value={displayName}
              handleChange={this.handleChange} 
              required
              label='Display Name' 
            />
            <FormInput 
              name='email' 
              type='email' 
              value={email}
              handleChange={this.handleChange} 
              required
              label='Email' 
            />
            
            <FormInput 
              name='password' 
              type='password' 
              value={password} 
              handleChange={this.handleChange}
              required
              label='Password' 
            />
            <FormInput 
              name='confirmPassword' 
              type='password' 
              value={confirmPassword} 
              handleChange={this.handleChange}
              required
              label='Confirm Password' 
            />
            { /* Display error message */
              this.state.errorMessage ?
              <div className='error'>{this.state.errorMessage}</div>
              :
              null
            }
            <div className='buttons'>
              <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
          </form>
        </div>
      ); 
    }
  }
  
  const mapDispatchToProps = dispatch =>({
    signUpStart: (email, password, displayName) => 
        dispatch(signUpStart({email, password, displayName}))
  });

  export default connect(null, mapDispatchToProps)(SignUp);
