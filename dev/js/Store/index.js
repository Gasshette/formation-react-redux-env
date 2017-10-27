import { createStore } from 'redux';
import allReducers from '../Reducers';
import sayHello from '../Actions/HelloActions';

const store = createStore(
  allReducers,
);

store.dispatch(sayHello("Hey ! Hello buddy !"));

export default store;
