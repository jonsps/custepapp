import React, { Component } from 'react';
import './css/Nav.css';

class NavUser extends Component {
  render() {
    return(
        <div className="Nav-User">
        	<span className="icon-home"></span>
            <span className="icon-tools"></span>
            <span className="icon-user"></span>
        </div>
    );
  }
}

 export default NavUser;