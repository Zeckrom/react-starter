import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cats state domain
 */

const selectCatsDomain = state => state.cats || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cats
 */

const makeSelectCats = () =>
  createSelector(
    selectCatsDomain,
    substate => substate,
  );

export default makeSelectCats;
export { selectCatsDomain };
