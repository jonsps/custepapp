import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './css/Nav.css';

class NavCustepapp extends Component {
  render() {
    return(
        <div className="Nav-logo">
            <img src={logo} className="logo" alt="logo" />
        </div>
    );
  }
}

 export default NavCustepapp;