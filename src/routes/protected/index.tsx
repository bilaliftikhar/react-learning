import React, { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { IProtectedRoute } from '../../interfaces';
import { Auth } from '../../services/auth';

export const ProtectedRoutes = ({ component: Component, ...rest } : IProtectedRoute) : ReactElement =>
  (
    <Route {...rest} render={(props : RouteProps) : ReactElement => (
      Auth.getAuth()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
    )} />
  );
