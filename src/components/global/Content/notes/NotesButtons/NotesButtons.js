import React, { Component } from 'react';
import './css/NotesButtons.css';

class NotesButtons extends Component {
	constructor(props) {
		super(props);
		this.noteTitle = props.noteTitle;
		this.noteColor = props.noteColor;
	}

	render() {
		return(
                    <li style={{background: this.noteColor}}>
                       <div className="Title">{this.noteTitle}</div>
                        <div className="copybutton">
                           <span className="icon-copy"></span>
                        </div>
                    </li>
			)

	}
}

export default NotesButtons;