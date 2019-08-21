import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "../containers/Home"
import MyBets from "../containers/MyBets"
import AvailableBets from "../containers/AvailableBets"
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
// import store from '../redux/store'
import BetCard from './BetCard';

class App extends React.Component {
  constructor() {
   super()

    this.state = {
      currentUser: null,
      allGames: [],
      myWallet: 500,
      myBets: []
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

    fetch("http://localhost:3000/bets") 
       .then(res => res.json())
       .then(betsData => {
            let filteredBets = betsData.filter(betsObj => {
                return betsObj.user_id == localStorage.getItem("user_id") || betsObj.bet_taker_id == localStorage.getItem("user_id")
            })
        this.setState({
            myBets: filteredBets
        })
        let nonStateBetsArray = [] 
        nonStateBetsArray.push(filteredBets)
        console.log(nonStateBetsArray)
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

    addBet = (takenBetObject) => {
      this.setState({
        myBets: [...this.state.myBets, takenBetObject]
      })
    }

  //need to use previous data and add into it

    createBet = (object) => {
      this.setState({
        myBets: [...this.state.myBets, object]
      })
    }

  //set selected game as state for placing a bet
  //event handler for selecting GameObject to Bet on

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
        addBet={this.addBet}
        createBet={this.createBet}        
        /> : 
        <Redirect to="/login" />)
        }
      }/>
            
      <Route exact path="/mybets" render={()=> {
        return <MyBets 
        currentUser={this.state.currentUser}
        myBets={this.state.myBets}
        />
        }
      }/>

      <Route exact path="/availablebets" render={()=> {
        return <AvailableBets 
        currentUser={this.state.currentUser}
        myBets={this.state.myBets}
        addBet={this.addBet}
        />
        }
      }/>

    <Route exact path="/logout" render={() => <Redirect to="/login" />} />
    
      </Switch>
      </Fragment>
  
    )
  }  
}

export default withRouter(App);
