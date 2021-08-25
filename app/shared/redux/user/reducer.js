import produce from 'immer';
import { loginActionTypes } from './constants';

export const initialState = {
  name: 'yahia',
};

/* eslint-disable default-case, no-param-reassign */
/* eslint-disable no-case-declarations */
const userReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case loginActionTypes.success:
        // eslint-disable-next-line camelcase
        const { access_token, ...rest } = action.data;
        window.localStorage.setItem('access_token', access_token);
        return { ...rest };
      default:
        return state;
    }
  });

export default userReducer;
