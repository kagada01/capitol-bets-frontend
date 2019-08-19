import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"
import BetCard from '../components/BetCard';
import { StepTitle } from 'semantic-ui-react';

class Home extends React.Component {
    
betURL = "http://localhost:3000/bets"

    state = {
        selectedGame:[],
        currentBet: [],  
        moneyLine: 0,
        wagerAmount: 0,
        payout: 0
    }

    //callback function to update selectedGame state when clicking a given GameCard
    goToBets = (gameObj) => {
        this.setState({
          selectedGame: gameObj
        })
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

    //Placebet Form submission button callback function
    //will take form data and turn into a Bet object
    //then post it to /bets
    postBet = (state) => {
        let data = {
            game_id: this.state.selectedGame.id,
            user_id: localStorage.getItem("user_id"),
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
                this.props.myBets.push(placedBetObj)
            })
        // ) : ( 
        //     alert("Please select a game to bet on!")
        //  )
    }

    render(){

    return (
        
        <div className="Home">Home>
            
        <div><h4>My Wallet: $500 </h4></div>    
            <div className="GamesContainer">
                <GamesContainer
                allGames={this.props.allGames} 
                goToBets={this.goToBets}
                
                />
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
            />
            
            </div>

        </div>
        )
        } 
    }

export default Home;