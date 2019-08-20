import React from 'react';
import { Route } from 'react-router';
import { SignUp, SignIn } from '../../components/registration';

export const PublicRoutes = () : JSX.Element =>
  (
    <div>
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </div>
  );

