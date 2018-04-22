import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyDX2DocNLOjR66u7Jgx3Kswky0LtXN2kXI",
    authDomain: "custepappids.firebaseapp.com",
    databaseURL: "https://custepappids.firebaseio.com",
    projectId: "custepappids",
    storageBucket: "custepappids.appspot.com",
    messagingSenderId: "543699124252"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
