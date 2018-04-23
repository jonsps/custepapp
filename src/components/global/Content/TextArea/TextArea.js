import React, { Component } from 'react';
import './css/TextArea.css';

import firebase from 'firebase';
import { DB_CONFIG } from '../../../config/config.js'
import 'firebase/database';

import NotesArea from './NotesArea/NotesArea.js';

class TextArea extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
			]
		};
//		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.app = firebase.initializeApp(DB_CONFIG);
		this.db = this.app.database().ref().child('notes');
	}

	componentDidMount() {
		const { notes } = this.state;
		this.db.on('child_added', snap => {
			notes.push({
				noteId: snap.key,
				noteColor: snap.val().noteColor,
				noteTitle: snap.val().noteTitle,
				noteContent: snap.val().noteContent
			})
			this.setState({notes});
		});
		this.db.on('child_removed', snap => {
			for(let i = 0; i < notes.length; i++){
				if (notes[i].noteId = snap.key) {
					notes.splice(i, 1);
				}
			}
			this.setState({notes});
		});
	}

	removeNote(noteId) {
		this.db.child(noteId).remove();
	}

/*	addNote() {
		//let { notes } = this.state;
		//notes.push({
		//	noteId: notes.length + 1,
		//	noteContent: note
		//});
		//this.setState({ notes });
		this.db.push().set({
			noteColor: '#ff0066',
			noteTitle: 'texto',
			noteContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
		});
	}*/

  render() {
    return(
      <div className="TextArea">
      		{
	      		this.state.notes.map(note => {
	      			return (
		      				<NotesArea 
		      				noteColor={note.noteColor}
		      				noteTitle={note.noteTitle}
		      				noteContent={note.noteContent}
		      				noteId={note.noteId}
		      				key={note.noteId}
		      				removeNote={this.removeNote}
		      				/>
	      				)
	      		})
      		}
      </div>
    );
  }
}

 export default TextArea;