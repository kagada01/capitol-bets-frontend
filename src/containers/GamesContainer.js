import React, { Component } from 'react'
import GameCard from "../components/GameCard"
var moment = require('moment');

const GamesContainer = (props) => {

    return (
            <div className="GamesContainer">   
            <h1>Select matchup:</h1>
               <h3>Upcoming Games: {moment().format('MMMM Do, YYYY')}</h3>
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