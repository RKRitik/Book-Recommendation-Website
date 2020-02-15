import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  books: [],
  loading: false,
  errMess: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_BOOKS:
      return {
        ...state,
        errMess: null,
        items: action.payload,
        loading: false
      };
    case ActionTypes.DELETE_BOOK:
      return {
        ...state,
        errMess: null,
        books: state.books.filter(book => book._id !== action.payload)
      };
    case ActionTypes.ADD_BOOK:
      return {
        ...state,
        errMess: null,
        items: [action.payload, ...state.books]
      };
    case ActionTypes.BOOKS_LOADING:
      return {
        ...state,
        loading: true,
        errMess: null
      };
    case ActionTypes.BOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, books: [] };
    default:
      return state;
  }
}
