import React, { Component } from 'react';
import './css/TextArea.css';

import firebase from 'firebase';
import { DB_CONFIG } from '../../../config/config.js';
import 'firebase/database';

import NotesArea from './NotesArea/NotesArea.js';

class TextArea extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
			]
		};
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