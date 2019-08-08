import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "../containers/Home"
import MyBets from "../containers/MyBets"
import { Route } from 'react-router-dom'
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
      
        <div className="App">
          <Login />
          <Navbar />
          <Home />
          <MyBets />
        </div>
    
    )
  }  
}

export default App;
