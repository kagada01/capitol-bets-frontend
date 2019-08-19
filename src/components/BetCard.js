import React, { Component, Fragment } from "react"
import { Form, Input, Divider } from 'semantic-ui-react'
import PlaceBetButton from './PlaceBetButton'

const FormExampleEvenlyDividedGroup = (props) => (



<Fragment>
  
  {props.selectedGame !== [] ? (
    <Form>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Set Money Line</label>
          <Input 
            onChange={props.getMoneyLine}
            fluid placeholder='+250' 
            />
        </Form.Field>
        <Form.Field>
          <label>Wager Amount</label>
          <Input 
            onChange={props.getWagerAmount} 
            fluid placeholder='Wager Amount' 
            />
        </Form.Field>
        <Form.Field>
          <label>Payout</label>
          <Input 
          onChange={props.getPayout}
          fluid placeholder={'Payout'} 
          />
        </Form.Field>
      </Form.Group>
      <PlaceBetButton
          postBet={props.postBet}
          currentUser={props.currentUser}
          moneyLine={props.moneyLine}
          wagerAmount={props.wagerAmount}
          payout={props.payout}
      />
    </Form>
  
) :
    
{

}
  }
</Fragment>
  
)


  export default FormExampleEvenlyDividedGroup