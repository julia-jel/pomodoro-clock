import React from 'react';
import '../styles.css';

class Controllers extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div id="controllers">
        <div id="start_stop" onClick={this.props.handleStartStop}>
          <i className="glyphicon glyphicon-play" />
          <i className="glyphicon glyphicon-pause" />
        </div>
        <div id="reset" onClick={this.props.handleReset}>
          <i className="glyphicon glyphicon-refresh" />
        </div>
      </div>
    )
  }
};

export default Controllers;
