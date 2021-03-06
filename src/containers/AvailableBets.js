import React, { Component } from 'react'
import CardExampleGroups from '../components/AvailableBetCard'
import swal from 'sweetalert';
import { Header, Card } from 'semantic-ui-react';

class AvailableBets extends React.Component {

    state = {
        availableBets: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/bets") 
        .then(res => res.json())
        .then(availBetsData => {
             let availBets = availBetsData.filter(availBetObj => {
                 return availBetObj.bet_taker_id == 0
         })
         this.setState({
            availableBets: availBets
        })
    }  
    )}

    takeBet = (event) => {

        if (event.user_id == localStorage.user_id) {
           swal({ 
               text: "Sorry, you cannot take your own bet!",
                icon: "error",
                button: "OK"
            })
       } else {

        let betId = event.id

        fetch(`http://localhost:3000/bets/${betId}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game_id: parseInt(event.game_id),
                user_id: parseInt(event.user_id),
                payout: parseInt(event.payout),
                plus_minus: event.plus_minus,
                bet_taker_id: parseInt(localStorage.getItem("user_id")),
                money_line_odds: parseInt(event.money_line_odds),
                wager_amount: parseInt(event.wager_amount),
                winner_id: parseInt(event.winner_id)
            })
        }).then(res => res.json())
        .then(acceptedBet => {
            // debugger 
           this.props.addBet(acceptedBet)
            
           let stateCopy = [...this.state.availableBets]
            
           let notAcceptedPlacedBets = stateCopy.filter(placedBetObj => {
                return (placedBetObj.id !== acceptedBet.id)
            })
           
            this.setState({
                availableBets: notAcceptedPlacedBets
            }) 
        })

        swal({ 
            text: `Congrats! You've accepted the bet!`,
             icon: "success",
             button: "Thanks"
         })
       }
    }

         render() {
           
             return (

                <div className="AvailableBets">
                  <Header as='h1' align="center" className="AvailableBetsMainHeader">Available Bets</Header>                  

                  <Header as='h3' className="AvailableBetsSubHeader">Select a Game to Bet on! | Wallet: $500</Header>                  
                <br />
                {  
                this.state.availableBets ? (

                   this.state.availableBets.map(availBetObj => <CardExampleGroups 
                   key={availBetObj.id}
                   availBetObj={availBetObj}
                   takeBet={this.takeBet}
                   currentUser={this.props.currentUser}
                   />
                   
                   ) 
                ) : null

                }
                </div> 
   
             )
         } 

}


export default AvailableBets