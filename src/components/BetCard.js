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
          <Input fluid placeholder='+250' />
        </Form.Field>
        <Form.Field>
          <label>Wager Amount</label>
          <Input fluid placeholder='Wager Amount' />
        </Form.Field>
        <Form.Field>
          <label>Payout</label>
          <Input fluid placeholder='Payout' />
        </Form.Field>
      </Form.Group>
      <PlaceBetButton
      postBet={props.postBet}
      currentUser={props.currentUser}/>
    </Form>
  
) :
    
{

}
  }
</Fragment>
  
)


  export default FormExampleEvenlyDividedGroup