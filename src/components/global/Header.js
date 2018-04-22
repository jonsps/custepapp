import React, { Component } from 'react';
import './css/Header.css';
import NavDesktop from './Header/NavDesktop.js';
import NavCustepapp from './Header/NavCustepapp.js';
import NavUser from './Header/NavUser.js';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Nav">
          <NavDesktop />
          <NavCustepapp />
          <NavUser />
        </div>
      </div>
    );
  }
}

 export default Header;