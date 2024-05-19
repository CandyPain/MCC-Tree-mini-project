import { combineReducers } from 'redux';
import mainReducer from './MainReducer.jsx'

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;