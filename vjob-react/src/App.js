import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header.js';
import JobList from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About';
import Login from './components/Login/Login';

//react router dom imports
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Login/>
        {/* <Main>
          <Switch>
            <Route exact path='/' component={ JobList }/>
            <Route  path='/vagas' component={ JobList }/>
            <Route  path='/about' component={ About }/>
          </Switch>
        </Main> */}
      </div>
    );
  }
}

export default App;
