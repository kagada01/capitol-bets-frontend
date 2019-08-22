import React, { Component, Fragment } from "react"
import { Card } from "semantic-ui-react"
import BetCard from "./BetCard"

const CardExampleLinkCardProp = (props) => (
  
  //upon click, render new BetCard with GameCard's props
<div onClick={() => props.goToBets(props.gameObj)}>
   
    <Card
      key={props.gameObj.id}
      link
      header={`${props.gameObj.game_team2} @ ${props.gameObj.game_team1}`}
      meta='MLB'
      description= {[`${props.gameObj.game_venue}, ${props.gameObj.game_location}`].join('')}
    />

</div>
  )
  
  export default CardExampleLinkCardProp
  