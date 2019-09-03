import { ShallowWrapper } from 'enzyme';
import { setUpUnitTest } from '../../utils';
import { Nav } from '../../components/navigation';

describe('Navigation Component', () => {
  const wrapper : ShallowWrapper = setUpUnitTest(Nav);

  it('RENDER', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

});
