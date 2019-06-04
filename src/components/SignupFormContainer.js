import React, { PureComponent } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../actions/users'

class SignupFormContainer extends PureComponent {

	state = { email: '', password: '' }

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.signup(this.state.email, this.state.password)
	}

	render() {
		console.log('WHAT?', this.state)
		return (
			<SignupForm
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				values={this.state} />
		)
	}
}


export default connect(null, { signup })(SignupFormContainer)