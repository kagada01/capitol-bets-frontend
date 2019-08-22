import React, { Component } from "react"
import { Header, Card } from 'semantic-ui-react'
import PlacedBetCard from "../components/PlacedBetCard"

class MyBets extends React.Component {

    state = {
        myGames: []
    }

//betsObj.bet_setter_id == localStorage.getItem("user_id")


    render() {

        return (
            
            <div className="MyBets">
                <Header align="center" className="MyBetsHeader" as='h1'>My Bets</Header>    

                <Header as='h3' className="YourBetsHeader">Your Bets | Wallet: $500</Header>
                <br />
                
                <Card.Group itemsPerRow={2} className="PlacedBetCardsGroup">
                { 
                    this.props.myBets ? (
                    this.props.myBets.map(betObj => <PlacedBetCard 
                    key={betObj.id}
                    betObj={betObj}
                    currentUser={this.props.currentUser}
                   />
                   )
                   
                   
                ) : null
                }
                </Card.Group>
            </div>
        )
        }

    }

export default MyBets