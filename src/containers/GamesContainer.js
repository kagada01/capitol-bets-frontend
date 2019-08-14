import React, { Component } from 'react'
import GameCard from "../components/GameCard"

const GamesContainer = (props) => {

    return (
            <div className="GamesContainer">   
               <h2>Upcoming Games</h2>
                {
                props.allGames.map(gameObj => <GameCard 
                    key={gameObj.id}
                    gameObj={gameObj}
                    />  
                )
           }   
            </div>
    )
}

export default GamesContainer;