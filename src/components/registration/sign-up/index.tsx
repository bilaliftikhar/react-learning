import React, { Component, ReactNode, ChangeEvent } from 'react';
import { RouterProps } from 'react-router';
import { ISignUp } from '../../../interfaces';
import { Auth } from '../../../services/auth';
import { StyledUsername, StyledPhone, StyledEmail, Styled, StyledPassword, StyledHeading } from './styled';
import { Input, RedButton } from '../../../ui';

export class SignUp extends Component<RouterProps> {
  state : ISignUp = {
    username: '',
    password: '',
    email: '',
    phone: '',
  };
  handleChange = (e : ChangeEvent<HTMLInputElement>) : void => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = () : void => {
    const { email, password, phone, username } = this.state;
    if (!(email && password)) {
      return;
    }
    this.setState({ email, password, phone, username });
    Auth.setLocalStorage('userProfile', this.state);
    this.props.history.push('/');
  }
  render () : ReactNode {
    const { email, password, username, phone } = this.state;
    return (
      <Styled>
        <StyledHeading>Sign up</StyledHeading>
        <StyledEmail>
          <Input
            type='text'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange} />
        </StyledEmail>
        <StyledPassword>
          <Input
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange} />
        </StyledPassword>
        <StyledUsername >
          <Input
            type='text'
            name='username'
            value={username}
            label='Username'
            onChange={this.handleChange} />
        </StyledUsername>
        <StyledPhone >
          <Input
            type='text'
            name='phone'
            value={phone}
            label='Phone'
            onChange={this.handleChange} />
        </StyledPhone>
        <RedButton onClick={this.handleSubmit}>Sign up</RedButton>
      </Styled>
    );
  }
}
