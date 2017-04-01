import React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (<div>
      <h1>
        Redustagram
      </h1>
      {React.cloneElement(this.props.children, this.props)}
    </div>);
  }
}

export default Main;