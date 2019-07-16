import React from 'react';
import '../styles.css';

class Break extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div id="break">
        <div id="break-label">
          <h3>Break Length</h3>
        </div>
        <div id="break-length">
          <span id="break-decrement" className="glyphicon glyphicon-arrow-down" onClick={this.props.handleDecrement} />
          {this.props.time}
          <span id="break-increment" className="glyphicon glyphicon-arrow-up" onClick={this.props.handleIncrement} />
        </div>     
      </div>
    )
  }
};

export default Break;
