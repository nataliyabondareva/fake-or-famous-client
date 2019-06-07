import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import { Redirect } from 'react-router-dom'
import socketIOClient from 'socket.io-client'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', endpoint: "https://safe-dawn-25834.herokuapp.com", }

  send = (event) => {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('user', this.state.quote)
    console.log('quote', this.state.quote)
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginAction(this.state.email, this.state.password)
    this.send(event)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const shouldRedirect = this.props.logins && this.props.logins.sucess === true
    if (shouldRedirect) {
      return (
        <Redirect to="/games" />
      )
    } else {
      return <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    logins: state.login,
  };
};


export default connect(mapStateToProps, { loginAction: login })(LoginFormContainer)