import agent from './agent';
import {
  ASYNC_START,
  ASYNC_END,
  USER_SIGN_UP,
  USER_SIGN_IN,
  USER_SIGN_OUT
} from './constants/actionTypes';

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    action.payload.then(
      res => {
        console.log('RESULT', res);
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        console.log('ERROR', error);
        action.error = true;
        action.payload = error.response.body;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

const sessionStorageMiddleware = store => next => action => {
  if (action.type === USER_SIGN_UP || action.type === USER_SIGN_IN) {
    if (!action.error) {
      window.sessionStorage.setItem('jwt', action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === USER_SIGN_OUT) {
    window.sessionStorage.setItem('jwt', '');
    agent.setToken(null);
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, sessionStorageMiddleware }
