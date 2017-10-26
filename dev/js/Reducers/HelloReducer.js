import * as types from '../Actions/ActionsTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.SAY_HELLO:
      return Object.Assign({}, action.hello);
    default:
      return state;
  }
}
