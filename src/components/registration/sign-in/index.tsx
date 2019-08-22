import React, { Component, ReactNode, ChangeEvent } from 'react';
import { RouterProps } from 'react-router';
import { ISignIn } from '../../../interfaces';
import { Auth } from '../../../services/auth';
import { StyledEmail, StyledPassword, Styled, StyledButton, StyledHeading } from './styled';
import { RedButton, Input } from '../../../ui/';

export class SignIn extends Component<RouterProps> {
  state : ISignIn = {
    email: '',
    password: '',
  };
  handleChange = (e : ChangeEvent<HTMLInputElement>) : void => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = () : void => {
    const { email, password } = this.state;
    if (!(email && password)) {
      return;
    }
    this.setState({ email, password });
    Auth.setLocalStorage('user', this.state);
    this.props.history.push('/');
  }
  render () : ReactNode {
    const { email, password } = this.state;
    return (
      <Styled>
        <StyledHeading>Login</StyledHeading>
        <StyledEmail>
          <Input
            type='text'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
          />
        </StyledEmail>
        <StyledPassword>
          <Input
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
          />
        </StyledPassword>
        <StyledButton>
          <RedButton onClick={this.handleSubmit}>Login</RedButton>
        </StyledButton>
      </Styled>
    );
  }
}
