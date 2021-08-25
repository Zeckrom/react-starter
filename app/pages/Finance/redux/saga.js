import { sagaTypes, generateSaga } from 'utils/generic-saga';

import { all } from 'redux-saga/effects';
import * as api from './services';
import { financeActionTypes } from './constants';

const finance = generateSaga(sagaTypes.POST, financeActionTypes, api.finance);

// Individual exports for testing
export default function* financeSaga() {
  yield all([finance()]);
}
