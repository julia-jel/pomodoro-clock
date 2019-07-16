/* container which maps state and dispatches to its props 
  so it can be referenced in the PomodoroClock component */

import Redux from 'redux';
import { connect } from 'react-redux';

import Clock from '../components/Clock';
import {sessionIncrementCreator, sessionDecrementCreator, sessionResetCreator} from '../actions/sessionActions'
import {breakIncrementCreator, breakDecrementCreator, breakResetCreator} from '../actions/breakActions'

const mapStateToProps = (state) => {
  return {
    sessionTime: state.sessionTime,
    breakTime: state.breakTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementSession: function() {
      dispatch(sessionIncrementCreator())
    },
    decrementSession: function() {
      dispatch(sessionDecrementCreator())
    },
    resetSession: function() {
      dispatch(sessionResetCreator())
    },
    incrementBreak: function() {
      dispatch(breakIncrementCreator())
    },
    decrementBreak: function() {
      dispatch(breakDecrementCreator())
    },
    resetBreak: function() {
      dispatch(breakResetCreator())
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default Container;
