import React from 'react';
import '../styles.css';

class Session extends React.Component {
  constructor(props){
    super(props);
  }  
  
  render() {
    return (
      <div id="session">
        <div id="session-label">
          <h3>Session Length</h3>
        </div>
        <div id="session-length">
          <span id="session-decrement" className="glyphicon glyphicon-arrow-down" onClick={this.props.handleDecrement} />
          {this.props.time}
          <span id="session-increment" className="glyphicon glyphicon-arrow-up" onClick={this.props.handleIncrement} />
        </div>
    </div>
    ) 
  }
};

export default Session;
