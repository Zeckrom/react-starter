/*
 *
 * Cats constants
 *
 */
import { generateActionTypes } from 'utils/generic-saga';

const root = 'app/Cats';

const fetchCatsActionTypes = generateActionTypes(root, 'fetch');
const addCatActionTypes = generateActionTypes(root, 'add');
const deleteCatActionTypes = generateActionTypes(root, 'delete');

export { fetchCatsActionTypes, addCatActionTypes, deleteCatActionTypes };
