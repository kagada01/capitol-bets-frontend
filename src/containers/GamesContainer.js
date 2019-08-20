import React, { Component } from 'react'
import GameCard from "../components/GameCard"
var moment = require('moment');

const GamesContainer = (props) => {

    return (
            <div className="GamesContainer">   
               <h5>{moment().format('MMMM Do, YYYY')}</h5>
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