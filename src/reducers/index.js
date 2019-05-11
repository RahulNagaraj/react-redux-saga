import { combineReducers } from 'redux';
import IncDecReducer from '../IncDecApp/duck';

const rootReducer = combineReducers({
  IncDecReducer,
});

export default rootReducer;
