import React from 'react';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';
import Controllers from './Controllers';
import Footer from './Footer';


/* the main page for the index route of this app */
class PomodoroClock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      timer: 1500,
      timerLabel: "Session",
      timerOn: false,
      intervalID: false
    }; 
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  };
  
  handleBreakDecrement() {
    if (this.state.breakTime > 1 && ! this.state.timerOn) {
      (this.state.timerLabel === "Break") ?
      this.setState({
        breakTime: this.state.breakTime - 1,
        timer: this.state.timer - 60
      }) : 
      this.setState({
        breakTime: this.state.breakTime - 1
      })
    }
  }
  
  handleBreakIncrement() {
    if (this.state.breakTime < 60 && ! this.state.timerOn) {
      (this.state.timerLabel === "Break") ?
      this.setState({
        breakTime: this.state.breakTime + 1,
        timer: this.state.timer + 60
      }) :
      this.setState({
        breakTime: this.state.breakTime + 1
      })
    }
  }
  
  handleSessionDecrement() {
    if (this.state.sessionTime > 1 && ! this.state.timerOn) {
      (this.state.timerLabel === "Session") ?
      this.setState({
        sessionTime: this.state.sessionTime - 1,
        timer: this.state.timer - 60
      }) :
      this.setState({
        sessionTime: this.state.sessionTime - 1
      })
    }
  }
  
  handleSessionIncrement() {
    if (this.state.sessionTime < 60 && ! this.state.timerOn) {
      (this.state.timerLabel === "Session") ?
      this.setState({
        sessionTime: this.state.sessionTime + 1,
        timer: this.state.timer + 60
      }) :
      this.setState({
        sessionTime: this.state.sessionTime + 1
      })
    }
  }
  
  decrementTimer() {        
    if (this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 1
      })  
    } else {
      this.beep.play();
      this.resetTimer();
    }   
  }
  
  resetTimer() {
     var new_label = (this.state.timerLabel === "Session") ? "Break" : "Session";
     var new_timer = (new_label === "Break") ? this.state.breakTime*60 : this.state.sessionTime*60;
    
     this.setState({
        timerLabel: new_label,
        timer: new_timer
     })     
  }
  
  countDown() {
    this.setState({
       intervalID: setInterval(this.decrementTimer, 1000)
    })
  }
  
  handleStartStop() {
    var timerState = !this.state.timerOn;
    this.setState({
      timerOn: timerState
    });
    
    if (timerState) {
      this.countDown()
      } else {
        clearInterval(this.state.intervalID)
      }
    }
  
  handleReset() {
    clearInterval(this.state.intervalID);
    this.setState({
      sessionTime: 25,
      breakTime: 5,
      timer: 1500,
      timerOn: false,
      timerLabel: "Session"
    });
    this.beep.pause();
    this.beep.currentTime = 0;
  }
  
  render() {
    return (
      <div id="clock">
        <div id="header">
          <h1>Pomodoro Clock</h1>
        </div>
        <div id="settings">
          <Break time={this.state.breakTime} handleIncrement={this.handleBreakIncrement} handleDecrement={this.handleBreakDecrement} />
          <Session time={this.state.sessionTime} handleIncrement={this.handleSessionIncrement} handleDecrement={this.handleSessionDecrement} />
        </div>
        <Timer timeElapsed={this.state.timer} label={this.state.timerLabel} />
        <audio src="https://s3.eu-central-1.amazonaws.com/80sdrums/ding_dong.mp3" id="beep" ref={(audio) => {this.beep = audio;}} />
        <Controllers handleStartStop={this.handleStartStop} handleReset={this.handleReset} />
        <Footer />
      </div>
    )
  }
};

export default PomodoroClock
