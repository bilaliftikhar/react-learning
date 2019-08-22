import React, { Fragment, ReactNode } from 'react';
import { Route, Redirect } from 'react-router';
import { Auth } from '../../services/auth';
import { SignUp, SignIn } from '../../components/registration';

export const PublicRoutes = () : JSX.Element => (
  <Fragment>
    <Route path='/sign-up' component={SignUp} />
    <Route path='/sign-in' component={SignIn} />
    <Route path='/logout' render={() : ReactNode => {
      Auth.logout();
      return <Redirect to={{ pathname: '/sign-in' }} />;
    }} />
  </Fragment>
);
