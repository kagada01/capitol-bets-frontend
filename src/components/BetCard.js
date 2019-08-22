import React, { Component, Fragment } from "react"
import { Form, Input, Divider } from 'semantic-ui-react'
import PlaceBetButton from './PlaceBetButton'
import OddsFormDropDown from './OddsFormDropDown'

const FormExampleEvenlyDividedGroup = (props) => (

<Fragment>
  
  {props.selectedGame !== [] ? (
    <Form className="form-box">
      <Form.Group widths='equal'>
        <Form.Field>
          <label><h4>Set Money Line</h4></label>
          <Input className="place-bet-form"
            onChange={props.getMoneyLine}
            placeholder='+250' 
            />
            <br />
            <br />
            <label><h4>Plus(+) / Minus (-)</h4></label>
            <OddsFormDropDown
            className="place-bet-dropdown"
            getPlusMinus={props.getPlusMinus}
            
            />
        </Form.Field>
        <Divider />
        <Form.Field>
          <label><h4>Wager Amount</h4></label>
          <Input 
          className="place-bet-form"
            onChange={props.getWagerAmount} 
            placeholder='Wager Amount' 
            />
        </Form.Field>
        <br />
        <Form.Field >
          <label><h4>Payout</h4></label>
          <Input 
          className="place-bet-form"
          placeholder='Payout'
          readOnly
          onChange={props.getPayout}
          // placeholder='Payout' 
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