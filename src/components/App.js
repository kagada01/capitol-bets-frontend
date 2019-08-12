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
      currentUser: {},
      allGames: [],
      selectedGame: [],
      allOdds: [],
      myBets: [],
      myWallet: null
    }
}

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(currentUser => {
      this.setState({
        currentUser: currentUser,
        myWallet: currentUser.cash
      })

      // debugger
    })

    

  }

//enhanced optic literal
  updateCurrentUser = (currentUser) => {
    this.setState({currentUser})
  }

  render() { 
    return (
     <Fragment>
        <Navbar />
      <Switch>
    
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    
      <Route exact path="/login" render={()=> <Login />}></Route>
    
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
