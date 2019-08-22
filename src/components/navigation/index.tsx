import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styled';

export const Nav = () : ReactElement => (
  <Styled>
    <Link to='/'>Home</Link>
    <Link to='/sign-in'>Sign In</Link>
    <Link to='/sign-up'>Sign Up</Link>
    <Link to='/logout'>Logout</Link>
  </Styled>
);
