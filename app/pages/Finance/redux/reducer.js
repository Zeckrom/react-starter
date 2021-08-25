/*
 *
 * Finance reducer
 *
 */
import produce from 'immer';
import { financeActionTypes } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const financeReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case financeActionTypes.success:
        break;
    }
  });

export default financeReducer;
