import { reducer } from '../reducers/user';
import * as types from '../type';
import { IUserListState } from '../interfaces';

describe('Reducers', () => {

  it('USER FETCH', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: '',
      search: '',
      users: [],
      sort: false,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.USER_FETCH,
      }),
    ).toEqual(INITIAL_STATE);
  });

  it('USER FETCH REJECTED', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: 'error',
      search: '',
      users: [],
      sort: false,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.USER_FETCH_REJECTED,
        payload: 'error',
      }),
    ).toEqual(INITIAL_STATE);
  });

  it('USER FETCH FULFILLED', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: 'error',
      search: '',
      users: [],
      sort: false,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.USER_FETCH_FULFILLED,
        payload: [],
      }),
    ).toEqual(INITIAL_STATE);
  });

  it('USER SORT', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: '',
      search: '',
      users: [],
      sort: true,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.USER_SORT,
      }),
    ).toEqual(INITIAL_STATE);
  });

  it('INPUT SEARCH', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: '',
      search: 'Deno',
      users: [],
      sort: true,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.INPUT_SEARCH,
        payload: 'Deno',
      }),
    ).toEqual(INITIAL_STATE);
  });

  it('USER FILTER', () => {
    const INITIAL_STATE : IUserListState = {
      fetching: false,
      error: '',
      search: 'Deno',
      users: [],
      sort: true,
    };
    expect(
      reducer(INITIAL_STATE, {
        type: types.USER_FILTER,
      }),
    ).toEqual(INITIAL_STATE);
  });
});
