/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/*
 *
 * Cats reducer
 *
 */
import produce from 'immer';
import {
  fetchCatsActionTypes,
  addCatActionTypes,
  deleteCatActionTypes,
} from './constants';

export const initialState = {
  cats: [],
};

/* eslint-disable default-case, no-param-reassign */
const catsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case fetchCatsActionTypes.success:
        return { ...state, cats: [...action.data] };
      case addCatActionTypes.success:
        return { ...state, cats: [...state.cats, action.data] };
      case deleteCatActionTypes.success:
        const newCats = state.cats.filter(cat => cat._id !== action.data._id);
        return { ...state, cats: [...newCats] };
      default:
        return state;
    }
  });

export default catsReducer;
