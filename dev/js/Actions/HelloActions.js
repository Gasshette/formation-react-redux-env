import * as types from './ActionsTypes';

export const sayHello = hello => ({
  type: types.SAY_HELLO,
  hello,
});
