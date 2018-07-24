import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header.js';
import JobList from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About';

//react router dom imports
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Main>
          <Switch>
            <Route exact path='/' component={ JobList }/>
            <Route  path='/vagas' component={ JobList }/>
            <Route  path='/about' component={ About }/>
          </Switch>
          <br/>
        </Main>
      </div>
    );
  }
}

export default App;
