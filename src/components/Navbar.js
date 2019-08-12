import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

const Navbar = () => {

return (
<Menu>
        <Menu.Item
          as={NavLink}
          to="/login"
          name='Login'
        //   active={activeItem === 'editorials'}
        //   onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>

        <Menu.Item 
        as={NavLink}
        name='Home' 
        to="/home"
        // active={activeItem === 'reviews'} 
        // onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          name='MyBets'
          to="/mybets"
        //   active={activeItem === 'upcomingEvents'}
        //   onClick={this.handleItemClick}
        >
          MyBets
        </Menu.Item>
      </Menu>
)
}

export default Navbar;