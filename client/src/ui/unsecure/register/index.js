import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'

import connected from '../../../state/setup/connect'
import { Page, Content, Form, Row } from './styles'
import * as registerActions from '../../../state/processes/register/actions'
import { selector as users } from '../../../state/entities/users/reducer'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      email: '',
      registered: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.users.active.userHandle && nextProps.users.active.userHandle) {
      this.setState({ registered: true })
    }
  }

  handleInput = field => event => {
    event.preventDefault()
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.registerActions.registerUser({ ...this.state})
  }

  render() {
    if(this.state.registered) {
      return <Redirect to={{pathname: '/landing', state: { from: this.props.location } }} />
    }

    return (
      <Page>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Input placeholder="First name" type="text" onChange={this.handleInput('firstName')} />
              <Input placeholder="Last name" type="text" onChange={this.handleInput('surname')} />
            </Row>
            <Row>
              <Input icon="user" placeholder="Username" type="text" onChange={this.handleInput('username')} />
            </Row>
            <Row>
              <Input icon="mail" placeholder="Email" type="text" onChange={this.handleInput('email')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Password" type="password" onChange={this.handleInput('password')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Confirm password" type="password" onChange={this.handleInput('confirmedPassword')} />
            </Row>
            <Button type="submit" animated color="green">
              <Button.Content visible>Create Account</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Form>
        </Content>
      </Page>
    )
  }
}

export default connected([users], [registerActions])(CreateAccount)
