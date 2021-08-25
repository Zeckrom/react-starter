import { financeAction } from '../actions';
import { financeActionTypes } from '../constants';

describe('Finance actions', () => {
  describe('Default Action', () => {
    it('has a type of financeActionTypes.success', () => {
      const expected = {
        type: financeActionTypes.request,
      };
      expect(financeAction()).toEqual(expected);
    });
  });
});
