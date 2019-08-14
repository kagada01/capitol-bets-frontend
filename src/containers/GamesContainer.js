import React, { Component } from 'react'
import GameCard from "../components/GameCard"

const GamesContainer = (props) => {

    return (
            <div className="GamesContainer">   
               
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