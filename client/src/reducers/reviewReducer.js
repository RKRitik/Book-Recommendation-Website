import * as ActionTypes from "../actions/ActionTypes";
const initialState = {
  isLoading: false,
  errMess: null,
  reviews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_REVIEWS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        reviews: action.payload
      };
    case ActionTypes.REVIEWS_LOADING:
      return { ...state, isLoading: true, errMess: null, reviews: [] };
    case ActionTypes.REVIEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        reviews: []
      };
    case ActionTypes.DELETE_REVIEW:
      return {
        ...state,
        errMess: null,
        reviews: state.reviews.filter(review => review._id !== action.payload)
      };
    case ActionTypes.ADD_REVIEW:
      var review = action.payload;
      return { ...state, reviews: state.reviews.concat(review) };

    default:
      return state;
  }
}
