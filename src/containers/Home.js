import React, { Component } from 'react';
import GamesContainer from "../containers/GamesContainer"

class Home extends React.Component {

    render() {
     
        return (
           
            <div className="Home">Home
            
                <div><h4>Your Wallet: {this.props.currentUser.cash}</h4></div>    
           
         
            
    
            <GamesContainer/>
            
            </div>
        )
        
    }
}

export default Home;