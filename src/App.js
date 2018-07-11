import React, { Component } from 'react';

import './App.css';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);

    const config = {
    apiKey: "AIzaSyCREsCFeeWkqjcGam11-tDYPtXYaYVxAkg",
    authDomain: "finalform-4182f.firebaseapp.com",
    databaseURL: "https://finalform-4182f.firebaseio.com",
    projectId: "finalform-4182f",
    storageBucket: "finalform-4182f.appspot.com",
    messagingSenderId: "898827597023"
  };
  this.app = firebase.initalizeApp(config);
  this.database = this.app.database();
  }
  render() {
    return (
      <ThreadDisplay database={this.database}/>
    );
  }
}

export default App;
