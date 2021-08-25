import { sagaTypes, generateSaga } from 'utils/generic-saga';

import { all } from 'redux-saga/effects';
import * as api from './services';
import { loginActionTypes } from './constants';

const login = generateSaga(sagaTypes.POST, loginActionTypes, api.login);

export default function* userSaga() {
  yield all([login()]);
}
