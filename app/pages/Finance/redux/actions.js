/*
 *
 * Finance actions
 *
 */

import { generateEmptyAction } from 'utils/generic-saga';
import { financeActionTypes } from './constants';

const financeAction = generateEmptyAction(financeActionTypes.request);

export { financeAction };
