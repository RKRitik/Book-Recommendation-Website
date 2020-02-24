import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import resultReducer from './resultReducer';
import recommendReducer from './recommendReducer';
export default combineReducers({
  book: bookReducer,
  error: errorReducer,
  auth: authReducer,
  review: reviewReducer,
  result: resultReducer,
  recommend: recommendReducer
});
