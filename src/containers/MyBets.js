import React, { Component } from "react"
import PlacedBetCard from "../components/PlacedBetCard"

class MyBets extends React.Component {

    state = {
        MyBets: [],
        myGames: []
    }

    componentDidMount(){
       fetch("http://localhost:3000/bets") 
       .then(res => res.json())
       .then(betsData => {
            let filteredBets = betsData.filter(betsObj => {

                return betsObj.user_id == localStorage.getItem("user_id")

            })
        // console.log(filteredBets)
        this.setState({
            MyBets: filteredBets
        })
    })
}

//betsObj.bet_setter_id == localStorage.getItem("user_id")


    render() {
        return (
            
            <div className="MyBets">
                <h3>Your Bets | Wallet: $500</h3>
                {
                   this.state.MyBets.map(betObj => <PlacedBetCard 
                    key={betObj.id}
                    betObj={betObj}

                   />
                   )
                }
            </div>
        )
        }

    }

export default MyBets