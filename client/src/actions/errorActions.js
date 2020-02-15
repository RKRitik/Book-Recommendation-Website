import * as ActionTypes from './ActionTypes';
// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: ActionTypes.GET_ERRORS,
    payload: { msg, status, id }
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: ActionTypes.CLEAR_ERRORS
  };
};
