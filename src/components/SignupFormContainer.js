import React, {PureComponent} from 'react'
import SignupForm from './LoginForm'
import {connect} from 'react-redux'
import {login} from '../actions/users'

export default class SignupForm extends PureComponent {
	state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.email]: event.target.email
    })
  }

	onSubmit = (event) => {
		event.preventDefault()
		this.setState({
      email: event.target.value,
      password: event.target.value
    })
  }

	render() {
		return (
      <div className="signup-form">
  			<form onSubmit={this.onSubmit}>
  				<label>
            Email
            <input type="email" name="email" value={
  						this.state.email || ''
  					} onChange={ this.onChange } />
          </label>
  					
  				<label>
            Password
  					<input type="password" name="password" value={
  						this.state.password || ''
  					} onChange={ this.onChange } />
  				</label>

  				<label>
            Confirm password
  					<input type="password" name="confirmPassword" value={
  						this.state.confirmPassword || ''
  					} onChange={ this.onChange } />
  				</label>

  				{
  					this.state.password &&
  					this.state.confirmPassword &&
  					this.state.password !== this.state.confirmPassword &&
  					<p style={{color:'red'}}>The passwords do not match!</p>
  				}

  				<button type="submit">Sign up</button>
  			</form>
      </div>
		)
	}
}
export default connect(null, {login})(SignupFormContainer)