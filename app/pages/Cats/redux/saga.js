import { all } from 'redux-saga/effects';
import { sagaTypes, generateSaga } from 'utils/generic-saga';
import * as api from './services';
import {
  fetchCatsActionTypes,
  addCatActionTypes,
  deleteCatActionTypes,
} from './constants';

const fetchCats = generateSaga(
  sagaTypes.GET,
  fetchCatsActionTypes,
  api.fetchCats,
);

const addCat = generateSaga(sagaTypes.POST, addCatActionTypes, api.addCat);

const deleteCat = generateSaga(
  sagaTypes.DELETE,
  deleteCatActionTypes,
  api.deleteCat,
);

// Individual exports for testing
export default function* catsSaga() {
  yield all([fetchCats(), addCat(), deleteCat()]);
}
