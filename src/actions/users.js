import * as request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'
import socketIOClient from 'socket.io-client'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
export const UPDATE_USER = 'UPDATE_USER'

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
})

export const signup = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ firstName: email, lastName: email, email, password })
    .then(result => console.log('result', result))
    .then(result => {
      dispatch(userSignupSuccess(result))
    })
    .catch(err => { console.error(err) })
}

export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: token
})

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ email, password })
    .then(result => {
      console.log('login result', result)
      // result.body === {token: ...}
      return dispatch(userLoginSuccess(result.body.token))
    })
    .catch(err => { console.log(err) })
}

const updateUsers = (users) => ({
  type: UPDATE_USERS,
  payload: users
})

export const getUsers = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/users`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(updateUsers(result.body)))
    .catch(err => console.log(err))
}

export const logout = () => ({
  type: USER_LOGOUT
})
