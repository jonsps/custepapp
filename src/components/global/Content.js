import React, { Component } from 'react';
import './css/Content.css';

import Notes from './Content/notes/Notes.js';
import TextArea from './Content/TextArea/TextArea.js';

class Content extends Component {
  render() {
    return(
      <div className="Content">
        <Notes />
        <TextArea />
      </div>
    );
  }
}

 export default Content;