import { generateActionTypes } from 'utils/generic-saga';

const root = 'shared/user/';

const loginActionTypes = generateActionTypes(root, 'login');

export { loginActionTypes };
