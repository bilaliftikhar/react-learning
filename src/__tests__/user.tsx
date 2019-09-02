import { ShallowWrapper } from 'enzyme';
import { setUpUnitTest } from '../utils';
import { IUserProps } from '../interfaces';
import { User } from '../components/user';

describe('User Component', () => {
  it('RENDER', () => {
    const props : IUserProps = {users: []};
    const wrapper : ShallowWrapper = setUpUnitTest(User, props);
    expect(wrapper.length).toBe(1);
  });
});
