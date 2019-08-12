import React, { Component } from "react"
import PlacedBetCard from "../components/PlacedBetCard"

class MyBets extends React.Component {

    render() {
        return (
            
            <div className="MyBets">
                MyBets 
                <h4>Your Wallet: {this.props.currentUser.cash}</h4>
                <div>
                    <PlacedBetCard />
                    <PlacedBetCard />
                    <PlacedBetCard />
                </div>
            </div>
        )
        }
}

export default MyBets