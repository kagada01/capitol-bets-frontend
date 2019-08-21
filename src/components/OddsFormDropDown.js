import React from 'react'
import { Dropdown } from 'semantic-ui-react'

//get value from event of selecting item from dropdown so it can be added to the 
//plus_minus attribute in the Bet being placed

const options = [
  { key: 1, text: 'Plus (+)', value: '+' },
  { key: 2, text: 'Minus (-)', value: '-' }
]

const OddsFormDropDown = (props) => 
<Dropdown clearable options={options} selection 
/>

export default OddsFormDropDown