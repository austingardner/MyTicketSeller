import { combineReducers } from 'redux';
import seatReducer from './seat_reducer';

const rootReducer = combineReducers({
  seats: seatReducer
});

export default rootReducer;
