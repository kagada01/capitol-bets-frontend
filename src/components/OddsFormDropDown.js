import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Plus (+)', value: '+' },
  { key: 2, text: 'Minus (-)', value: '-' }
]

const OddsFormDropDown = (props) => 
<Dropdown clearable options={options} selection 
/>

export default OddsFormDropDown