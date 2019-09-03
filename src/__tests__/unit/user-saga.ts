import { testSaga } from 'redux-saga-test-plan';
import * as  actions from '../../actions/users';
import { fetchUsers } from '../../api/user';
import { handleUsersSaga } from '../../saga/user';
import { IUser } from '../../interfaces';

describe('Saga', () => {
  it('USER', () => {
    const users : Array<IUser> = [];
    testSaga(handleUsersSaga)
      .next()
      .call(fetchUsers)
      .next(users)
      .put(actions.fetchUsersFulfill(users))
      .next()
      .isDone();
  });
});
