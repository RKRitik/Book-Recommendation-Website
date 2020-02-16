import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getReviews = () => dispatch => {
  dispatch(setReviewsLoading());
  axios
    .get('/api/review')
    .then(res =>
      dispatch({
        type: ActionTypes.GET_REVIEWS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addReview = review => (dispatch, getState) => {
  axios
    .post('/api/review', review, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.ADD_REVIEW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteReview = id => (dispatch, getState) => {
  axios
    .delete(`/api/review/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.DELETE_REVIEW,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setReviewsLoading = () => {
  return {
    type: ActionTypes.REVIEWS_LOADING
  };
};
