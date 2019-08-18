import React, { Component } from "react"
import { Form, Input } from 'semantic-ui-react'

const FormExampleEvenlyDividedGroup = (props) => (
    <Form>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Suggested Odds</label>
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
    </Form>
  )
  
  export default FormExampleEvenlyDividedGroup




// const BetCard = (props) => {
//     //set state here for Form fields
//     //upon form submission, use this.setState to envoke callback function from Home


//         console.log(props)
//         return (
        
//         <div>
//             {props.selectedGame.game_location}
            
        
//         </div>
//         )


// }

// export default BetCard;