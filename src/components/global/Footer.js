import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <div className="NavFooter">

          <div className="Copyright">
            <p>Derechos Reservados | IdeasPositivas</p>
          </div>

          <div className="Action">
            <h1 className="Clear"><span className="icon-clear"></span></h1>
            <h1 className="CopyStep"><span className="icon-copy"></span></h1>
          </div>
        
        </div>
      </div>
    );
  }
}

 export default Footer;