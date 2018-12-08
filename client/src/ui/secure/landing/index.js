import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'
import { Page, Sidebar } from './styles'
import { Link, withRouter, Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import TicTacToe from './TicTacToe'


//import * from './routes'


class LandingPage extends Component {
  render() {
    return (
      <Page>
        <Link to="/landing">All Games</Link>
        <Link to="/landing/tic-tac-toe">Play Tic Tac toe</Link>
        Landing Page
        <Route exact path="/landing" component={() => null}/>
        <Route exact path="/landing/tic-tac-toe" component={TicTacToe} />
      </Page>
    )
  }
}

export default withRouter(AutoLoginOrRedirect(LandingPage))
