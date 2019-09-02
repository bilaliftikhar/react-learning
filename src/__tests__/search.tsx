import { ShallowWrapper } from 'enzyme';
import { ISearchProps, IUserSortAction } from '../interfaces';
import { USER_SORT } from '../type';
import { setUpUnitTest } from '../utils';
import { Search } from '../components/search';

describe('Search Component', () => {

  const props : ISearchProps = {
    searcHandler: () : void => {},
    sortHandler: () : IUserSortAction => {
      const userSortAction : IUserSortAction = { type: USER_SORT };
      return userSortAction;
    },
  };

  it('RENDER', () => {
    const wrapper : ShallowWrapper = setUpUnitTest(Search, props);
    expect(wrapper).toMatchSnapshot();
  });
});
