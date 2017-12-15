import * as types from './ActionsTypes';
import * as api from '../Api';

export const sayHello = hello => ({
  type: types.SAY_HELLO,
  hello,
});

export const getMoviesSuccess = movies => ({
  type: types.GET_MOVIES,
  movies,
});

export const getMovies = () => dispatch =>
  api.getMovies()
  .then(json => dispatch(getMoviesSuccess(json)),
  );

