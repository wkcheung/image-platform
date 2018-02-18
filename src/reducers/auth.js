import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  ASYNC_START
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
    case USER_SIGN_IN:
      if (action.error) {
        return {
          ...state,
          inProgress: false,
          errors: action.payload.errors
        };
      } else {
        return {
          ...state,
          inProgress: false,
          errors: null,
          email: action.payload.user.email,
          emailVerified: action.payload.user.emailVerified,
          photoURL: action.payload.user.photoURL,
          creationTime: action.payload.user.creationTime,
          lastSignInTime: action.payload.user.lastSignInTime
          };
      }
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
