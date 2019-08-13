import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"

class Home extends React.Component {

    render() {
 
        return (
        
            <div className="Home">Home
            
                <div><h4>My Wallet: {}</h4></div>    
             
            <GamesContainer/>
            
            </div>
        )
        
    }
}

export default Home;