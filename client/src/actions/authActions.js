import axios from 'axios';
import { returnErrors } from './errorActions';
import * as ActionTypes from './ActionTypes';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: ActionTypes.USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {

      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: ActionTypes.AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ name, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('/api/user', body, config)
    .then(res =>
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(

        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: ActionTypes.REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      if (err)
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
      else {
        dispatch(returnErrors("Internal Server Error", 500, 'LOGIN_FAIL'));
        console.log('sent 500');
      }
      dispatch({
        type: ActionTypes.LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
