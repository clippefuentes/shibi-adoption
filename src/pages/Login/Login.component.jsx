import React from 'react';

import FormInput from '../../components/FormInput/FormInput.components';
import FormButton from '../../components/FormButton/FormButton.component';

import {
  LoginContainer,
  LoginButtonsContainer,
} from './Login.styles';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <LoginContainer>
        <FormButton onClick={signInWithGoogle}> Sign In With Google </FormButton>
      </LoginContainer>
    );
  }
}

export default LoginComponent;