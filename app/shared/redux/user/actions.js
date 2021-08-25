import { generateActionWithBody } from 'utils/generic-saga';
import { loginActionTypes } from './constants';

const login = generateActionWithBody(loginActionTypes.request);

export { login };
