import * as selectors from '../../selectors/user-list';
import { IUserListState, IUser, IState } from '../../interfaces';
import { reducer } from '../../reducers/user';
import * as types from '../../type';
import { getState } from '../../utils';
import { store } from '../../store';
import * as actions from '../../actions/users';

describe('Selectors', () => {
  it('INITIAL', () => {
    const user : IUserListState = {
      fetching: true,
      error: '',
      search: '',
      users: [],
      sort: false,
    };
    expect(reducer(user, { type: types.INITIAL})).toEqual(user);
  });
  it('FETCH', () => {
    store.dispatch(actions.fetchUsers());
    expect(selectors.getFetching(getState())).toEqual(true);
  });

  it('SORT', () => {
    store.dispatch(actions.sortUser());
    expect(selectors.getSort(getState())).toEqual(true);
  });

  it('ERROR', () => {
    const error = 'Error';
    store.dispatch(actions.fetchUsersError(error));
    expect(selectors.getError(getState())).toEqual(error);
  });

  it('SEARCH', () => {
    const value = 'Deno';
    store.dispatch(actions.searchInput(value));
    expect(selectors.getSearch(getState())).toEqual(value);
  });

  it('USER', () => {
    const userArray : Array<IUser> = [];
    store.dispatch(actions.fetchUsersFulfill(userArray));
    expect(selectors.getUsers(getState())).toEqual(userArray);
  });

  it('FILTER', () => {
    const userArray : Array<IUser> = [];
    const search = 'Deno';
    expect(selectors.getFilterUser(userArray, search)).toEqual(userArray);
  });

  it('SORT USER', () => {
    const userArray : Array<IUser> = [];
    expect(selectors.getSortUser(userArray)).toEqual(userArray);
  });
});
