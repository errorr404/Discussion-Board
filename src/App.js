import React, { Component } from 'react';

import './App.css';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import key from './key';
class App extends Component {
  constructor(props) {
    super(props);

    const config = {
    apiKey: {key},
    authDomain: "finalform-4182f.firebaseapp.com",
    databaseURL: "https://finalform-4182f.firebaseio.com",
    projectId: "finalform-4182f",
    storageBucket: "finalform-4182f.appspot.com",
    messagingSenderId: "898827597023"
  };
  this.app = firebase.initializeApp(config);
  this.database = this.app.database();
  }
  render() {
    return (
      <div>
        <h1 className="middle">Discussion Board</h1>
        <ThreadDisplay database={this.database}/>
      </div>

    );
  }
}

export default App;
