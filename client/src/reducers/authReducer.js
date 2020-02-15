import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case ActionTypes.AUTH_ERROR:
    case ActionTypes.LOGIN_FAIL:
    case ActionTypes.LOGOUT_SUCCESS:
    case ActionTypes.REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
