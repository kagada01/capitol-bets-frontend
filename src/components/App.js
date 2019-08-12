import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "../containers/Home"
import MyBets from "../containers/MyBets"
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import store from '../redux/store'

class App extends React.Component {
  constructor() {
   super()

    this.state = {
      currentUser: null,
      allGames: [],
      selectedGame: [],
      allOdds: [],
      myBets: [],
      myWallet: 500
    }
}

updateCurrentUser = (currentUser) => {
  this.setState({currentUser})
}

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(currentUser => {
     
    //  debugger
     
      this.setState({
          myWallet: currentUser.cash
      })
    })

    //check to see if there is a jwt?
    //if there is, fetch to get the user and update the user state
    let token = localStorage.getItem("jwt")
    if(token){
      
    }
    //if not let them login 

  }

  render() { 
    return (
     <Fragment>
        <Navbar />
      <Switch>
    
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    
      <Route exact path="/login" render={()=> {
        return (this.state.currentUser ?   
      <Redirect to="/home" /> :
        <Login updateCurrentUser={this.updateCurrentUser}/>) 
     
    }
  } 
      />
      <Route exact path="/home" render={()=> 
        <Home currentUser={this.state.currentUser} />
      }/>
      
      <Route exact path="/mybets" render={()=>
      <MyBets currentUser={this.state.currentUser} />
    }/>
    
      </Switch>
      </Fragment>
  
    )
  }  
}

export default withRouter(App);
