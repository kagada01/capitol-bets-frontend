import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Button, Form, Segment, Message} from "semantic-ui-react";

class Login extends React.Component {

    state = {
      username: "",
      password: ""
    }

    handleChange = (e, {name, value}) => {
      this.setState({ [name]: value})
    }

    handleLoginSubmit = (e) => {
      e.preventDefault()
      console.log("test")
      fetch('http://localhost:3000/login', {
        method: 'POST', 
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(data => {
      //  debugger
       
        if(data.authenticated){
          //update state
          this.props.updateCurrentUser(data.user)
          //store the token in local storage
          console.log(data.token)
          localStorage.setItem("jwt", data.token)
          // debugger
          localStorage.setItem("user_id", data.user.id)
        }else{
          alert("incorrect username or password")
        }
      })
    }

    render() {
        return (

      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login
          </Button>
        </Form>
      </Segment>
        )
    }
  
}

export default withRouter(Login);
