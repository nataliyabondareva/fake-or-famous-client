import React from 'react'

export default function SignupForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Email:
      <input type="text" name="email" value={props.values.email} onChange={props.onChange}></input>
      </label>
      <label>
        Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange}></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>)
}
