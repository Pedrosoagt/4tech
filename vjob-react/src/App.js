import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header.js';
import JobList from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About';
import Login from './components/Login/Login';


//react router dom imports
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';

class App extends Component {
  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user'))
  }

  getLoggedUser() {
    return this.state.loggedUser
  }

  loginHandler = ( emailVal, senhaVal) => {
    axios.post('/login', { 'email': emailVal, 'senha': senhaVal})
      .then(res => {
        window.localStorage.setItem('user', JSON.stringify(res.data.user));
        window.localStorage.setItem('token', res.data.token);

        this.setState({ loggedUser: res.data.user });
      })
      .catch(err => {
        alert('errow')
        console.error(err);
      })
  }

  logoutHandler = () => {
    window.localStorage.clear();
    this.setState({loggedUser: null});
  }

  render() {
    if (this.getLoggedUser()) {
      return (
        <div>
          <Header/>
          <br/>
          <Main>
            <Switch>
              <Route exact path='/' component={ JobList }/>
              <Route  path='/vagas' component={ JobList }/>
              <Route  path='/about' component={ About }/>
            </Switch>
          </Main>
        </div>
      );
    }
    return (
      <div className="App">
        <Header/>
        <Login login={this.loginHandler}/>
      </div>
    );
  }
}

export default App;
