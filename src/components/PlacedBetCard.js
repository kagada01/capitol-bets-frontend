import React, { Component } from "react"
import { Card } from 'semantic-ui-react'

const PlacedBetCard = (props) => (
  
//   <div onClick={() => props.goToBets(props.gameObj)}>
      <Card
        
        key={props.betObj.id}
        link
        header={props.betObj.game.game_team2 + ' @ ' + props.betObj.game.game_team1} 
        meta={'Suggested Odds: ' + props.betObj.game.suggested_odds}
        description= {'Your Odds: ' + [props.betObj.money_line_odds + ' Payout: $' + props.betObj.payout].join('')}
      />
    )

export default PlacedBetCard
