import React, { Component } from 'react'
import GameCard from "../components/GameCard"

class GamesContainer extends React.Component {

    render() {
        return (
            <div className="GamesContainer">   
                GamesContainer
                <div>
                    <GameCard />
                    <GameCard />
                    <GameCard /> 
                </div>
            </div>

        )

    }

}

export default GamesContainer;