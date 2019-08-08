import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/nav.js'
import { Route } from 'react-router-dom'

class App extends Component {
  
    constructor() {
      super()
      
      this.state = {

      }
    
     
     
     render() {
      return (
        
          <div className="App">
            <Nav />
          </div>
      
      )
     }
    

    }

}

export default App;
