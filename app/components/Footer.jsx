import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div id="footer">
        <p>Designed and coded by</p>
        <p><a id="link" target="_blank" href="https://www.freecodecamp.org/julia-el">Julia EL</a></p>
      </div>
    )
  }
};

export default Footer;
