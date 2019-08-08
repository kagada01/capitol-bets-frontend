import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
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
          <Navbar />
        </div>
    
    )
  }  
}

export default App;
