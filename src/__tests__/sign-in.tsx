import { createMemoryHistory } from 'history';
import { ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import { setUpUnitTest } from '../utils';
import { SignIn } from '../components/registration/sign-in';

describe('Sign In Component', () => {
  let wrapper : ShallowWrapper;

  beforeEach(() => {
    wrapper = setUpUnitTest(
      SignIn,
      { history: createMemoryHistory() },
    );
  });

  it('EMAIL', () => {
    const value = 'devTest@react.com';
    wrapper.find('#email')
      .simulate('change', { target: { name: 'email', value } });
    expect(wrapper.state('email')).toEqual(value);
  });

  it('PASSWORD', () => {
    const value = '12345';
    wrapper.find('#password')
      .simulate('change', { target: { name: 'password', value } });
    expect(wrapper.state('password')).toEqual(value);
  });

  it('SNAPSHOT', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
