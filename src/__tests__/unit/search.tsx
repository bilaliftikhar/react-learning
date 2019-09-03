import { ShallowWrapper } from 'enzyme';
import { ISearchProps } from '../../interfaces';
import { setUpUnitTest } from '../../utils';
import { Search } from '../../components/search';
import * as actions from '../../actions/users';

describe('Search Component', () => {

  const props : ISearchProps = {
    searcHandler: () : void => {},
    sortHandler: actions.sortUser,
  };

  it('RENDER', () => {
    const wrapper : ShallowWrapper = setUpUnitTest(Search, props);
    expect(wrapper).toMatchSnapshot();
  });
});
