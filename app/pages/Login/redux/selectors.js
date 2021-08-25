import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;
const selectUserDomain = state => state.user || {};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate,
  );

export default makeSelectLogin;
export { selectUserDomain, selectLoginDomain, makeSelectLogin, makeSelectUser };
