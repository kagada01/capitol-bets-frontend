import React, { Component } from "react"

const BetCard = (props) => {

        console.log(props)
        return (
        
        <div>
            {props.selectedGame.game_location
            }
        </div>
        )


}

export default BetCard;