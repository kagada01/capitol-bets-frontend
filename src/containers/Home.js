import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"
import BetCard from '../components/BetCard';

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
    getMoneyLine = (props) => {
        console.log("trying to retrieve Money Line")
    }

    //callback function for controlled Wager Amount input
    getWagerAmount = (props) => {
        console.log("trying to retrieve Wager Amount")
    }

    //callback function for controlled Payout input
    getPayout = (props) => {
        console.log("trying to retrieve Payout")
    }

    //Placebet Form submission button callback function
    //will take form data and turn into a Bet object
    //then post it to /bets
    postBet = () => {
        console.log("trying to post bet")
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