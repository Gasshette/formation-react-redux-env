import * as types from '../Actions/ActionsTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
