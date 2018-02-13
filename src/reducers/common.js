import {
  APP_LOAD,
  REDIRECT,
  USER_SIGN_UP,
  USER_SIGN_IN,
  USER_SIGN_OUT
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Image Platform Dev',
  token: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case REDIRECT:
      return { ...state,
        redirectTo: null
      };
    case USER_SIGN_UP:
    case USER_SIGN_IN:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case USER_SIGN_OUT:
      return { ...state,
        redirectTo: '/',
        token: null,
        currentUser: null
      };
    default:
      return state;
  }
};
