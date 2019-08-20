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
       if (event.user_id == localStorage.user_id) {
           alert("Sorry, you cannot take your own bet!")
       } else {

        let betId = event.id

        fetch(`http://localhost:3000/bets/${betId}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bet_taker_id: localStorage.getItem("user_id")
            })
        }).then(res => res.json())
        .then(acceptedBet => {
            console.log(acceptedBet)
        })
       }
    }

         render() {
           
             return (

                <div className="AvailableBets">
                <h3>Select a Game to Bet on! | Wallet: $500</h3>
                
               
                {  
                this.state.availableBets ? (

                   this.state.availableBets.map(availBetObj => <CardExampleGroups 
                   key={availBetObj.id}
                   availBetObj={availBetObj}
                   takeBet={this.takeBet}
                   />
                   
                   ) 
                ) : null

                }
                </div> 
   
             )
         } 

}


export default AvailableBets