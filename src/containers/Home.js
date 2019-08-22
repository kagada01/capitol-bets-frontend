import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"
import BetCard from '../components/BetCard';
import { StepTitle, Header, Image } from 'semantic-ui-react';
import swal from 'sweetalert';
var moment = require('moment');   

//UX - NEED Suggested Odds on Home, NOT MyBets

class Home extends React.Component {

homeImg = "https://www.trzcacak.rs/myfile/detail/445-4457780_us-capitol-building-silhouette.png"  
betURL = "http://localhost:3000/bets"

    state = {
        selectedGame: [],
        currentBet: [],
        plusMinus: null,  
        moneyLine: 0,
        wagerAmount: 0,
        payout: 0
    }

    //callback function to update selectedGame state when clicking a given GameCard
    goToBets = (event, gameObj) => {
      
    let toggleGame = event.currentTarget.firstChild.firstChild
    console.log(toggleGame)
        if (toggleGame.className == "content selectedGame") {
            toggleGame.classList.remove("selectedGame")
        } else { 
            toggleGame.classList.add("selectedGame")

            this.setState({
                selectedGame: gameObj
            })
    }
    }
      
        

//*************Place Bet Form****************//
    //callback function for controlled Money Line input
    getMoneyLine = (event) => {
        let newMoneyLine = event.target.value
        this.setState({
            moneyLine: newMoneyLine 
        })
    }

    //callback function for controlled Wager Amount input
    getWagerAmount = (event) => {
        let newWagerAmount = event.target.value
        this.setState({
            wagerAmount: newWagerAmount
        })
    }

    //callback function for controlled Payout input 
    getPayout = (event) => {
        let newPayout = event.target.value
        this.setState({
            payout: newPayout
        })
    }

    getPlusMinus = (event) => {
        console.log(event)
        let setPlusMinus = event.target.value
    }

    //Placebet Form submission button callback function
    //will take form data and turn into a Bet object
    //then post it to /bets
    postBet = (event, state) => {
       console.log(event)
        let toggleGame = event.currentTarget.firstChild.firstChild
       
        // debugger
         if (this.state.selectedGame.length == 0) { 

            swal({ 
                text: "Please select a game before trying to place a bet!",
                 icon: "error",
                 button: "OK"
             })

         } else {
            let data = {
                game_id: this.state.selectedGame.id,
                user_id: localStorage.getItem("user_id"),
                payout: 0,
                bet_taker_id: 0,
                money_line_odds: this.state.moneyLine,
                wager_amount: this.state.wagerAmount,
                winner_id: 0
            }
     
        //NEED TO IMPLEMENT WORKING ALERT IF NO GAME IS SELECTED
        // data.game_id ? ( 
        fetch("http://localhost:3000/bets", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)})
            .then(res => res.json())
            .then(placedBetObj => {
                console.log(placedBetObj)
                this.setState({    
                    currentBet: placedBetObj
                })
                this.props.createBet(placedBetObj)
        })

        swal({ 
            text: "Bet Placed Succesfully!",
             icon: "success",
             button: "OK"
         })

         } 
    }

    render(){

    return (
    
        <div className="Home">


<Image src={this.homeImg} size="small" centered/>
    <Header align="center" className="MainHomeHeader" as='h1'>Welcome to Capitol Bets! </Header>    

        <br />
        <div>
        <Header className="UpcomingGames" as='h3'>Upcoming Games | Wallet: $500 | {moment().format('MMMM Do, YYYY')}</Header>    
        </div>    
        
            <div className="BetCard">
            <BetCard 
            //state
                selectedGame={this.state.selectedGame}
                currentUser={this.props.currentUser}
                moneyLine={this.state.moneyLine}
                wagerAmount={this.state.wagerAmount}
                payout={this.state.payout}
            //callback functions for Place Bet Form    
                postBet={this.postBet}
                getMoneyLine={this.getMoneyLine}
                getWagerAmount={this.getWagerAmount}
                getPayout={this.getPayout}
                getPlusMinus={this.getPlusMinus}
                createBet={this.props.createBet}
            />
            
            </div>

            <div className="GamesContainer">
            <br />
            <br />
                <GamesContainer
                // centered='true'
                allGames={this.props.allGames} 
                goToBets={this.goToBets}
                currentUser={this.props.currentUser}
                />
            </div>

        </div>
        )} 
    }

export default Home;