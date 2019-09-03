import { createMemoryHistory } from 'history';
import {  ShallowWrapper } from 'enzyme';
import { setUpUnitTest } from '../../utils';
import { SignUp } from '../../components/registration/sign-up';

describe('SignUp Component', () => {

  let wrapper : ShallowWrapper;

  beforeEach(() => {
    wrapper = setUpUnitTest(
      SignUp,
      { history: createMemoryHistory() });
  });

  it('EMAIL', () => {
    const value = 'devTest@react.com';
    wrapper.find('#email')
      .simulate('change', { target: { name: 'email', value } });
    expect(wrapper.state('email')).toEqual(value);
  });

  it('PASSWORD', () => {
    const value = '12345bill';
    wrapper.find('#password')
      .simulate('change', { target: { name: 'password', value } });
    expect(wrapper.state('password')).toEqual(value);
  });

  it('USERNAME', () => {
    const value = 'John';
    wrapper.find('#username')
      .simulate('change', { target: { name: 'username', value } });
    expect(wrapper.state('username')).toEqual(value);
  });

  it('PHONE', () => {
    const value = '090078601';
    wrapper.find('#phone')
      .simulate('change', { target: { name: 'phone', value } });
    expect(wrapper.state('phone')).toEqual(value);
  });

  it('SNAPSHOT', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
