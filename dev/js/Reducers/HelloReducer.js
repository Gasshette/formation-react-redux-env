import * as types from '../Actions/ActionsTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.SAY_HELLO:
      return action.hello;
    default:
      return state;
  }
}
