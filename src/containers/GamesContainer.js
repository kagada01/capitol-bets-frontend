import React, { Component } from 'react'
import GameCard from "../components/GameCard"

const GamesContainer = (props) => {

    return (
            <div className="GamesContainerComp">   
                {
                props.allGames.map(gameObj => <GameCard 
                    key={gameObj.id}
                    gameObj={gameObj}
                    goToBets={props.goToBets}
                    />  
                )
           }   
            </div>
    )
}

export default GamesContainer;