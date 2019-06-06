import React, { PureComponent } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../actions/users'
import { Redirect } from 'react-router'

class SignupFormContainer extends PureComponent {

	state = { email: '', password: '' }

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.signupAction(this.state.email, this.state.password)
	}

	render() {
		if (this.props.signup && this.props.signup.success === true) return (
			<Redirect to="/logins" />
		)
		return (
			<SignupForm
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				values={this.state} />
		)
	}
}


const mapStateToProps = (state) => {
	return {
		signup: state.signup
	};
};

export default connect(mapStateToProps, { signupAction: signup })(SignupFormContainer)