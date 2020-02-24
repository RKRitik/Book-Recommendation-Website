import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { returnErrors } from './errorActions';

export const getResults = (searchTerms, filter, filterTerm) => dispatch => {

  dispatch(setResultsLoading());
  const body = JSON.stringify({ searchTerms, filter, filterTerm });
  console.log(body);
  const headers = {
    "Content-Type": "application/json"
  }
  axios
    .post('/api/results', body, {
      headers: headers
    }).then(res => {
      if (res.length > 0)
        dispatch({ type: ActionTypes.GET_RESULTS, payload: res.data })
      else {
        console.log('could not find any results');
        dispatch(returnErrors('Could not find any books', 500))
      }
    }
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};



export const setResultsLoading = () => {
  return {
    type: ActionTypes.RESULTS_LOADING
  };
};
