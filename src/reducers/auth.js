import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  ASYNC_START
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
    case USER_SIGN_IN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === USER_SIGN_IN || action.subtype === USER_SIGN_UP) {
        return { ...state, inProgress: true };
      }
      break;
    default:
      return state;
  }

  return state;
};
