import { combineReducers } from 'redux';
import greetingReducer from './greeting';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
