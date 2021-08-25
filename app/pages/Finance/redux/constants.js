/*
 *
 * Finance constants
 *
 */
import { generateActionTypes } from 'utils/generic-saga';

const root = 'app/Finance';

const financeActionTypes = generateActionTypes(root, 'finance');

export { financeActionTypes };
