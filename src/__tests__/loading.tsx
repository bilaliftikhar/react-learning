import { ShallowWrapper } from 'enzyme';
import { setUpUnitTest } from '../utils';
import { Loading } from '../components/loading';

describe('Loading Component', () => {

  it('RENDER', () => {
    const wrapper : ShallowWrapper = setUpUnitTest(Loading);
    expect(wrapper).toMatchSnapshot();
  });
});
