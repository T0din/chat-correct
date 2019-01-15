/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from './reducer';
import socket from './socket-middleware';


/*
 * Code
 */
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares
const appliedMiddleware = applyMiddleware(socket);
const enhancers = compose(appliedMiddleware, ...devTools);

// Store
const store = createStore(reducer, enhancers);


/*
 * Export default
 */
export default store;