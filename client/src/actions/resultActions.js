import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { returnErrors } from "./errorActions";

export const getResults = (searchTerms, filter, filterTerm) => dispatch => {
  dispatch(setResultsLoading());
  const body = JSON.stringify({ searchTerms, filter, filterTerm });
  console.log(body);
  const headers = {
    "Content-Type": "application/json"
  };
  axios
    .post("/api/results", body, {
      headers: headers
    })
    .then(res => {
      console.log(res.data);
      if (res.data.length > 0)
        dispatch({ type: ActionTypes.GET_RESULTS, payload: res.data });
      else {
        dispatch({
          type: ActionTypes.RESULTS_FAILED,
          payload: "Could not find any books"
        });
        console.log("could not find any results");
      }
    });
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const setResultsLoading = () => {
  return {
    type: ActionTypes.RESULTS_LOADING
  };
};
