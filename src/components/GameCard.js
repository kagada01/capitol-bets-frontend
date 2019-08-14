import React, { Component, Fragment } from "react"
import BetCard from "./BetCard"

const GameCard = (props) => {

        return (
            <Fragment>
            

                <h4>Home: {props.gameObj.game_team1} | Away: {props.gameObj.game_team2} </h4>
                <p>Location: {props.gameObj.game_venue} | {props.gameObj.game_location} </p>


            <BetCard />
            
            </Fragment>
        )


}

export default GameCard;