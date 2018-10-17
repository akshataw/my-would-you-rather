import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';
import { auth } from './auth';
import { questions } from './questions';
import { users } from './users';

export default combineReducers({
  auth,
  users,
  questions,
  loadingBar: loadingBarReducer
})
