import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "../containers/Home"
import MyBets from "../containers/MyBets"
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
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
    //accesses already-created users
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(currentUser => {
     
      //set current users' wallet to default amount ($500)
      this.setState({
          myWallet: currentUser.cash
    
      })
      //fetch upcoming Games data from SportsRadar API
      fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(upcomingGames => {
     
      //set allGames state to every game from that day
        this.setState({
          allGames: upcomingGames
        })

      })

  })

    //check to see if there is a jwt?
    //if there is, fetch to get the user and update the user state
    let token = localStorage.getItem("jwt")
    if(token){
      fetch('http://localhost:3000/home', {
        headers: {"Authentication":`Bearer ${token}`}
      })
      .then(res => res.json())
      .then(data => {
        this.updateCurrentUser(data)
      })
    }
    //if not let them login 
  }

 goToBets = (e) => {
    e.preventDefault();
    console.log(e.target)
    // debugger
}


  render() { 
    return (
     <Fragment>
        <Navbar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
      <Switch>
    
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    
      <Route exact path="/login" render={()=> {
        return (this.state.currentUser ? (  
         
          <Redirect to="/home" />
        )
           : <Login updateCurrentUser={this.updateCurrentUser}/>
        )}
  } />

      <Route exact path="/home" render={()=> {
        return (this.state.currentUser ?
        
        <Home 
        currentUser={this.state.currentUser} 
        allGames={this.state.allGames}
        goToBets={this.goToBets}
        /> : 
        <Redirect to="/login" />)
        }
      }/>
            
      <Route exact path="/mybets" render={()=> {
        return <MyBets currentUser={this.state.currentUser}/>}
          }/>
      
    <Route exact path="/logout" render={() => <Redirect to="/login" />} />
    
      </Switch>
      </Fragment>
  
    )
  }  
}

export default withRouter(App);
