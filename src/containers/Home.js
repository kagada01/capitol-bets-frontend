import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"

const Home = (props) => {
    return (
        
        <div className="Home">Home>
            
        <div><h4>My Wallet: $500 </h4></div>    
            <div className="GamesContainer">
                <GamesContainer
                allGames={props.allGames} 
                goToBets={props.goToBets}/>
            </div>
        </div>
        )
}

export default Home;