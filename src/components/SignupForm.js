import React from 'react'
// import {connect} from 'react-redux'
// import {signup} from '../actions/users'
// import SignupFormContainer from './SignupFormContainer'
// import {Redirect} from 'react-router-dom'

export default function SignupForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      Email: 
      <input type="text" name="email" value={props.values.email} onChange={props.onChange}/>
    </label>
    <label>
      Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>
		<label>
      Confirm password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>
    <button type="submit">Login</button>
  </form>)
}
