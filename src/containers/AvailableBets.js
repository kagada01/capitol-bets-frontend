import React, { Component } from 'react'
import CardExampleGroups from '../components/AvailableBetCard'

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
        console.log("trying to take bet")
    }

         render() {
             return (

                <div className="AvailableBets">
                <h3>Select a Game to Bet on! | Wallet: $500</h3>
                
               
                {
                   this.state.availableBets.map(availBetObj => <CardExampleGroups 
                   key={availBetObj.id}
                   availBetObj={availBetObj}
                   takeBet={this.takeBet}
                   />
                       
              ) 
                }
                </div> 
   
             )
         } 

}


export default AvailableBets