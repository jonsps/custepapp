import React, { Component } from 'react';
import './css/Notes.css';

import firebase from 'firebase';
import { BDB_CONFIG } from '../../../config/config.js';
import 'firebase/database';

import NotesButtons from './NotesButtons/NotesButtons.js'

class Notes extends Component {
      constructor() {
            super();
            this.state = {
                  notes: [
                  ]
            };
            this.apps = firebase.initializeApp(BDB_CONFIG, "other");
            this.db = this.apps.database().ref().child('notes');
      }

      componentDidMount() {
            const { notes } = this.state;
            this.db.on('child_added', snap => {
                  notes.push({
                        noteColor: snap.val().noteColor,
                        noteTitle: snap.val().noteTitle,
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


  render() {
    return(
      <div className="Notes">
                  <ul>
                       {
                              this.state.notes.map(note => {
                                    return (
                                                <NotesButtons
                                                noteTitle={note.noteTitle}
                                                noteColor={note.noteColor}
                                                />
                                          )
                              })
                        }
                  </ul>
            </div>
    );
  }
}

 export default Notes;