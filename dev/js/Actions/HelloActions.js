import * as types from './ActionsTypes';

const sayHello = hello => ({
  type: types.SAY_HELLO,
  hello,
});

export default sayHello;

