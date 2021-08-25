import { takeEvery } from 'redux-saga/effects';
import {
  fetchOrDeleteTemplate,
  postTemplate,
  putTemplate,
  withoutApiTemplate,
} from './templates';

import { sagaTypes } from './constants';

export const generateSagaFunction = (sagaType, actionTypes, api) => {
  switch (sagaType) {
    case sagaTypes.GET:
    case sagaTypes.DELETE:
      return fetchOrDeleteTemplate.bind(null, actionTypes, api);
    case sagaTypes.POST:
      return postTemplate.bind(null, actionTypes, api);
    case sagaTypes.PUT:
      return putTemplate.bind(null, actionTypes, api);
    case sagaTypes.WITHOUT_API:
      return withoutApiTemplate.bind(null, actionTypes);
    default:
      return 'Failed';
  }
};

export const generateSaga = (sagaType, actionTypes, api) => {
  const sagaFunction = generateSagaFunction(sagaType, actionTypes, api);
  return function* watcher() {
    yield takeEvery(actionTypes.request, sagaFunction);
  };
};
