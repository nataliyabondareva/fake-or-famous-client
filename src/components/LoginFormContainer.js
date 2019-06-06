import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import { Redirect } from 'react-router-dom'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginAction(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    if (this.props.logins && this.props.logins.success === true) return (
      <Redirect to="/games" />
    )
    return <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
  }
}

const mapStateToProps = (state) => {
  return {
    logins: state.login,
  };
};


export default connect(mapStateToProps, { loginAction: login })(LoginFormContainer)