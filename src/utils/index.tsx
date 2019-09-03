import React, { ElementType } from 'react';
import { Provider } from 'react-redux';
import { ShallowWrapper, shallow, ReactWrapper, mount } from 'enzyme';
import { store } from '../store';
import { IError, IState } from '../interfaces';
export { USERS_URL } from './urls';

export const handleError = ({ message } : IError) : string => message;

export const setUpUnitTest = (Component : ElementType, props = {}) : ShallowWrapper =>
  shallow(<Component {...props} />);

export const setUpIntegratedTest = ( Component : ElementType, props = {}) : ReactWrapper =>
  mount(
    <Provider store={store}>
      <Component {...props} />
    </Provider>,
  );

export const getState = () : IState => store.getState();
