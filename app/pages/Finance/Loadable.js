/**
 *
 * Asynchronously loads the component for Finance
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
