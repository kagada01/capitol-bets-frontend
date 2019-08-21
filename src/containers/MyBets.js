import React, { Component } from "react"
import PlacedBetCard from "../components/PlacedBetCard"

class MyBets extends React.Component {

    state = {
        myGames: []
    }

//betsObj.bet_setter_id == localStorage.getItem("user_id")


    render() {

        return (
            
            <div className="MyBets">
                <h3>Your Bets | Wallet: $500</h3>
                
                { this.props.myBets ? (
                   this.props.myBets.map(betObj => <PlacedBetCard 
                    key={betObj.id}
                    betObj={betObj}
                   />
                   )
                ) : null
                }
            </div>
        )
        }

    }

export default MyBets