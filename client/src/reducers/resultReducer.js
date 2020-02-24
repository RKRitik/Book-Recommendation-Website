import * as ActionTypes from "../actions/ActionTypes";

export default function(
  state = {
    isLoading: false,
    errMess: null,
    results: []
    //resultTerms:[],
  },
  action
) {
  switch (action.type) {
    case ActionTypes.GET_RESULTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        results: action.payload
      };
    case ActionTypes.RESULTS_LOADING:
      return { ...state, isLoading: true, errMess: null, results: [] };
    case ActionTypes.RESULTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        results: []
      };
    default:
      return state;
  }
}
