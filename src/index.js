/**
 * Replace with custom runner when needed.
 * @module index
 */

import start from 'volto-base/start-server';

const reloadServer = start();

if (module.hot) {
  reloadServer();
}
