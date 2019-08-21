import React, { Fragment, Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from "react-router-dom"

const Navbar = (props) => {
  let { location: { pathname } } = props
  let logged_in = props.logged_in
  let logout = () => {
   //clear localstorage of our token
   localStorage.clear()
    //set the user state back to null
   props.updateCurrentUser(null)

    props.history.push("/login")
  }

return (
  <Menu>
  {logged_in ? (
    
    <Fragment>
        <Menu.Item 
        as={NavLink}
        to="/home"
        name='Home' 
        active={pathname === "/home"} 
        />
        
        <Menu.Item
          as={NavLink}
          to="/mybets"
          name="MyBets"
          active={pathname === "/mybets"}
        />

        <Menu.Item
          as={NavLink}
          to="/availablebets"
          name="Available Bets"
          active={pathname === "/availablebets"}
        />

        <Menu.Menu position="right">
          <Menu.Item 
          to="/logout" 
          name="Logout" 
          onClick={logout} />
        </Menu.Menu>
      </Fragment>

  ) : (

    <Fragment>
    <Menu.Item
          as={NavLink}
          to="/login"
          name='Login'
          active={pathname === '/login'}
        />

        <Menu.Item 
        as={NavLink}
        to="/home"
        name='Home' 
        active={pathname === "/home"} 
        />
        </Fragment>
      )
  }     
   </Menu>
    )
}

export default withRouter(Navbar);