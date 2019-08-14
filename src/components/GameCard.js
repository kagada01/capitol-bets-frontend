import React, { Component, Fragment } from "react"
import { Card } from "semantic-ui-react"
import BetCard from "./BetCard"

const src = '/images/wireframe/white-image.png'

const CardExampleLinkCardProp = (props) => (
        
    <Card
      onClick={props.goToBets}
      link
      header={`${props.gameObj.game_team2} @ ${props.gameObj.game_team1}`}
      meta='MLB'
      description= {[`${props.gameObj.game_venue}, ${props.gameObj.game_location}`].join('')}
    />
  )
  
  export default CardExampleLinkCardProp
  