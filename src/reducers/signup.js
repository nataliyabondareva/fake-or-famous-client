import { USER_SIGNUP_SUCCESS } from '../actions/users'

export default function (state = null, action) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      console.log('action', action)
      return {
        success: true
      }
    default:
      return state
  }
}