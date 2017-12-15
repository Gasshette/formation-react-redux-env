import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../Reducers';
import { sayHello } from '../Actions/HelloActions';

// Ommited code ...
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-ensable */

const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

store.dispatch(sayHello("Hey ! Hello buddy !"));

export default store;
