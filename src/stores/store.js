import rootDux from '../dux/root-dux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export function configureStore() {
  const middleware = applyMiddleware(thunkMiddleware);
  var store = createStore(rootDux, middleware);

  store.subscribe(() => {
    window.reduxStore = store.getState();
  });

  return store;
}