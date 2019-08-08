import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "../containers/Home"
import MyBets from "../containers/MyBets"
import { Route, Switch } from 'react-router-dom'
import store from '../redux/store'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userLoggedIn: false,
      allGames: [],
      selectedGame: [],
      allOdds: [],
      myBets: []
    }
}

  render() { 
    return (
      <div>
      <Navbar />
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/mybets" component={MyBets}></Route>


  
        </div>
    )
  }  
}

export default App;
