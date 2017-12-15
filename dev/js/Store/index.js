import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../Reducers';
import { sayHello } from '../Actions/HelloActions';

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

store.dispatch(sayHello("Hey ! Hello buddy !"));

export default store;
