/*
 *
 * Cats actions
 *
 */

import {
  generateActionWithBody,
  generateEmptyAction,
  generateActionWithId,
} from 'utils/generic-saga';
import {
  fetchCatsActionTypes,
  addCatActionTypes,
  deleteCatActionTypes,
} from './constants';

const fetchCats = generateEmptyAction(fetchCatsActionTypes.request);
const addCat = generateActionWithBody(addCatActionTypes.request);
const deleteCat = generateActionWithId(deleteCatActionTypes.request);

export { fetchCats, addCat, deleteCat };
