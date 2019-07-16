import Redux from 'redux';

import {SESSIONINCREMENT, SESSIONDECREMENT, SESSIONRESET, sessionIncrementCreator, sessionDecrementCreator, sessionResetCreator} from './actions/sessionActions'
import {BREAKINCREMENT, BREAKDECREMENT, BREAKRESET, breakIncrementCreator, breakDecrementCreator, breakResetCreator} from './actions/breakActions'

const sessionReducer = (state = 25, action) => {
  switch(action.type) {
    case SESSIONINCREMENT:
      return state + 1;
    case SESSIONDECREMENT:
      return state - 1;
    case SESSIONRESET:
      return state = 25;
    default:
      return state;
  }
};

const breakReducer = (state = 5, action) => {
  switch(action.type) {
    case BREAKINCREMENT:
      return state + 1;
    case BREAKDECREMENT:
      return state - 1;
    case BREAKRESET:
      return state = 5;
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  sessionTime: sessionReducer,
  breakTime: breakReducer
});

export default rootReducer;
