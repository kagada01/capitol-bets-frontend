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
      myBets: []
    }
}


  componentDidMount() {
    fetch('http://localhost:3001/users/1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
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
    
      <Route exact path="/login" component={Login}></Route>
    
      <Route exact path="/home" render={()=> 
        <Home user={this.state.currentUser}/>
      }/>
      
      <Route exact path="/mybets" component={MyBets}></Route>

      </Switch>
      </Fragment>
  
    )
  }  
}

export default withRouter(App);
