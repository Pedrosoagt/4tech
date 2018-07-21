import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header.js';
import JobList from './components/job/JobList/JobList';
import Formulario from './components/job/InputJob/InputJob'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Formulario/>
        <br/>
        <JobList/> 
      </div>
    );
  }
}

export default App;
