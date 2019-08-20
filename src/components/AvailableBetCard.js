import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


const CardExampleGroups = (props) => (
<Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://www.anbmedia.com/wp/wp-content/uploads/2019/03/mlb-1027x780.jpg' />
        <Card.Header>{props.availBetObj.game.game_team2 + ' @ ' + props.availBetObj.game.game_team1}</Card.Header>
        <Card.Meta>Vegas Odds: {props.availBetObj.game.suggested_odds}</Card.Meta>
        <Card.Description>
        <strong>User Set Odds: </strong> {props.availBetObj.money_line_odds}
        </Card.Description>
        <Card.Description>
        <strong>Wager Amount: </strong> ${props.availBetObj.wager_amount}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Take Bet!
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
)

export default CardExampleGroups;