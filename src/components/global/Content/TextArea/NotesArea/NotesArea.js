import React, { Component } from 'react';
import './css/NotesArea.css';

class NotesArea extends Component {
	constructor(props) {
		super(props);
		this.noteId = props.noteId;
		this.noteColor = props.noteColor;
		this.noteTitle = props.noteTitle;
		this.noteContent = props.noteContent;
	}

	handleRemove(id) {
		this.props.removeNote(id);
	}

	render() {
		return(
				<div className="NotesArea"> 
                    <div className="titular"> 
                      <div className="linea"></div> 
                      <div className="titulo" style={{background: this.noteColor}}>{this.noteTitle}
                      	<span onClick={() => this.handleRemove(this.noteId)}>&times;</span></div> 
                    </div>

                    <p>{this.noteContent}</p> 
                </div> 
			)

	}
}

export default NotesArea;