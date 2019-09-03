import * as selectors from '../../selectors/user-list';
import { IUserListState, IUser, IState } from '../../interfaces';

describe('Selectors', () => {
  it('FETCH', () => {
    const user : IUserListState = {
      fetching: false,
      error: '',
      search: '',
      users: [],
      sort: true,
    };
    const state : IState = { user };
    expect(selectors.getFetching(state)).toEqual(false);
  });

  it('SORT', () => {
    const user : IUserListState = {
      fetching: false,
      error: '',
      search: '',
      users: [],
      sort: false,
    };
    const state : IState = { user };
    expect(selectors.getSort(state)).toEqual(false);
  });

  it('ERROR', () => {
    const error = 'Error';
    const user : IUserListState = {
      fetching: false,
      error: 'Error',
      search: '',
      users: [],
      sort: false,
    };
    const state : IState = { user };
    expect(selectors.getError(state)).toEqual(error);
  });

  it('SEARCH', () => {
    const search = 'deno';
    const user : IUserListState = {
      fetching: false,
      error: '',
      search: 'deno',
      users: [],
      sort: false,
    };
    const state : IState = { user };
    expect(selectors.getSearch(state)).toEqual(search);
  });

  it('USER', () => {
    const userArray : Array<IUser> = [];
    const user : IUserListState = {
      fetching: false,
      error: 'Error',
      search: '',
      users: [],
      sort: false,
    };
    const state : IState = { user };
    expect(selectors.getUsers(state)).toEqual(userArray);
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
