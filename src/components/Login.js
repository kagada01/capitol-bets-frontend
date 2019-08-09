import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Button, Form, Segment, Message} from "semantic-ui-react";


class Login extends React.Component {


    render() {
        return (

            // <div className="">
            // Login
            
            
            
            // </div>

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
            //   onChange={this.handleChange}
            //   value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
            //   onChange={this.handleChange}
            //   value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Segment>
        )
    }
    

}

export default Login;
