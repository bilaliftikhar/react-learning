import React, { Fragment, ReactElement } from 'react';
import { withRouter, Switch, RouteComponentProps } from 'react-router';
import { ProtectedRoutes } from './protected';
import { PublicRoutes } from './public';
import { Nav } from '../components/navigation';
import { UserList } from '../components/user-list';


export const Routes = withRouter(({ location } : RouteComponentProps) : ReactElement => (
  <Fragment>
    {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Nav />}
    < Switch >
      <ProtectedRoutes exact path='/' component={UserList} />
      <PublicRoutes />
    </Switch>
  </Fragment>
));
