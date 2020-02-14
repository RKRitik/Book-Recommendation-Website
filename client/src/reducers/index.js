import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer'

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  review: reviewReducer
});
