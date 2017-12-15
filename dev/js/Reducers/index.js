import { combineReducers } from 'redux';
import HelloReducer from '../Reducers/HelloReducer';
import MoviesReducer from '../Reducers/MoviesReducer';

const allReducers = combineReducers({
  hello: HelloReducer,
  movies: MoviesReducer,
});

export default allReducers;
