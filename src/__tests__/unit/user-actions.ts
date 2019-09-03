import * as actions from '../../actions/users';
import * as types from '../../type';
import {
  IUserFetchRejectedAction,
  IUserFetchFulfilledAction,
  IInputSearchAction,
  IUserFilterAction,
  IUserFetchAction,
  IUserSortAction,
  IUser,
} from '../../interfaces';

describe('Actions', () => {

  it('USER FETCH', () => {
    const expectedAction : IUserFetchAction = {
      type: types.USER_FETCH,
    };
    expect(actions.fetchUsers()).toEqual(expectedAction);
  });

  it('USER FILTER', () => {
    const expectedAction : IUserFilterAction = {
      type: types.USER_FILTER,
    };
    expect(actions.filterUser()).toEqual(expectedAction);
  });

  it('USER SORT', () => {
    const expectedAction : IUserSortAction = {
      type: types.USER_SORT,
    };
    expect(actions.sortUser()).toEqual(expectedAction);
  });

  it('INPUT SEARCH', () => {
    const payload = 'Deno';
    const expectedAction : IInputSearchAction = {
      type: types.INPUT_SEARCH,
      payload,
    };
    expect(actions.searchInput(payload)).toEqual(expectedAction);
  });

  it('USER FETCH FULFILLED', () => {
    const payload : Array<IUser> = [];
    const expectedAction : IUserFetchFulfilledAction = {
      type: types.USER_FETCH_FULFILLED,
      payload,
    };
    expect(actions.fetchUsersFulfill(payload)).toEqual(expectedAction);
  });

  it('USER FETCH REJECTED', () => {
    const payload = 'Errored';
    const expectedAction : IUserFetchRejectedAction = {
      type: types.USER_FETCH_REJECTED,
      payload,
    };
    expect(actions.fetchUsersError(payload)).toEqual(expectedAction);
  });
});
