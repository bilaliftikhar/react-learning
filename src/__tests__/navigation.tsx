import { ShallowWrapper } from 'enzyme';
import { setUpUnitTest } from '../utils';
import { Nav } from '../components/navigation';

describe('Navigation Component', () => {
  let wrapper : ShallowWrapper;

  beforeEach(() => {
    wrapper = setUpUnitTest(Nav);
  });

  it('RENDER', () => {
    expect(wrapper.length).toBe(1);
  });

  it('SNAPSHOT', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
