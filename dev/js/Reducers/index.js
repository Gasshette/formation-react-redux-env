import { combineReducers } from 'redux';
import HelloReducer from '../Reducers/HelloReducer';

const allReducers = combineReducers({
  hello: HelloReducer,
});

export default allReducers;
