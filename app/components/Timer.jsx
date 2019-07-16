import React from 'react';
import '../styles.css';

const secondsToString = function(timeInSec) {
  var minutes = Math.floor(timeInSec / 60);
  var seconds = timeInSec % 60;
  return ("0"+ minutes).slice(-2) + ":" + ("0"+ seconds).slice(-2)
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.getTimerClass = this.getTimerClass.bind(this);
  }
  
  getTimerClass() {
    return (this.props.timeElapsed > 10) ? "enough-time" : "little-time"
  }
  
  render() {
    return (     
      <div id="timer">
        <div id="timer-label">
          <h2>{this.props.label}</h2>
        </div>
        <div id="time-left" className={this.getTimerClass()}>
          <h2>{secondsToString(this.props.timeElapsed)}</h2>
        </div>
      </div>
    )
  }
};

export default Timer;
