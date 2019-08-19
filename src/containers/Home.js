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

    postBet = () => {
        console.log("trying to post bet")
      
    }

    //callback function to update selectedGame state when clicking a given GameCard
    goToBets = (gameObj) => {
        this.setState({
          selectedGame: gameObj
        })
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
            selectedGame={this.state.selectedGame}
            postBet={this.postBet}
            currentUser={this.props.currentUser}
            moneyLine={this.state.moneyLine}
            wagerAmount={this.state.wagerAmount}
            payout={this.state.payout}
            />
            
            </div>

        </div>
        )
        } 
    }

export default Home;