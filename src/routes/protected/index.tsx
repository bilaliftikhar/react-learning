import React from 'react';
import { Route, Redirect } from 'react-router';
import { App } from '../../app';
import { IAuth } from '../../interfaces';

export const ProtectedRoutes = ({authented} : IAuth) : JSX.Element =>
  (
    <div>
      {authented ?
          <Route exact path='/' component={App} /> :
          <Redirect to='/sign-in'/>}
    </div>
    );
