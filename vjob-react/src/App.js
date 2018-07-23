import React, { Component } from 'react';
import './App.css';
import Container from './components/layout/Container/Container'
import Header from './components/navigation/Header/Header.js';
import JobList from './components/job/JobList/JobList';
import Formulario from './components/job/InputJob/InputJob'
import Collapse from  './hoc/Collapse/Collapse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Container>
          <Collapse>
            <Formulario/>
          </Collapse>
          <br/>
          <JobList/> 
        </Container>
      </div>
    );
  }
}

export default App;
