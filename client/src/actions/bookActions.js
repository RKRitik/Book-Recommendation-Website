import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getBooks = () => dispatch => {
  dispatch(setBooksLoading());
  axios
    .get('/api/book')
    .then(res =>
      dispatch({
        type: ActionTypes.GET_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addBook = book => (dispatch, getState) => {
  axios
    .post('/api/book', book, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.ADD_BOOK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBook = id => (dispatch, getState) => {
  axios
    .delete(`/api/book/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.DELETE_BOOK,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setBooksLoading = () => {
  return {
    type: ActionTypes.BOOKS_LOADING
  };
};
