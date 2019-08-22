import React, { Component } from 'react'
import GameCard from "../components/GameCard"
import { Card } from "semantic-ui-react"


const GamesContainer = (props) => {



    return (
            <div className="GamesContainerComp">   
                <Card.Group itemsPerRow={2} className="GameCardGroup">
                {
                
                props.allGames.map(gameObj => <GameCard 
                    itemsPerRow='two'
                    className="GameCard"
                    key={gameObj.id}
                    gameObj={gameObj}
                    goToBets={props.goToBets}
                   
                    />  
                )
         
           }
          </Card.Group>
            </div>
    )
}

export default GamesContainer;