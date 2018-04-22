import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Nav">
        	<div className="Nav-Desktop">
            <p>ESCRITORIO</p>
        	</div>

          <div className="Nav-logo">
            <img src={logo} className="logo" alt="logo" />
          </div>

        	<div className="Nav-User">
            <span className="icon-home"></span>
            <span className="icon-tools"></span>
            <span className="icon-user"></span>
        	</div>
        </div>
      </div>
    );
  }
}

 export default Header;