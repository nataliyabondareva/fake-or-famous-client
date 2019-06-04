import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
})

export const signup = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ firstName: email, lastName: email, email, password })
    .then(result => {
      dispatch(userSignupSuccess())
    })
    .catch(err => { console.error(err) })
}














// export const ADD_USER = 'ADD_USER'

// export const UPDATE_USERS = 'UPDATE_USERS'
// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
// export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

// export const USER_LOGOUT = 'USER_LOGOUT'
// export const logout = () => ({
//   type: USER_LOGOUT
// })

// export const userLoginSuccess = () => ({
//   type: USER_LOGIN_SUCCESS,
//   payload: login
// })




// export const login = (email, password) => (dispatch) =>
//   request
//     .post(`${baseUrl}/logins`)
//     .send({ email, password })
//     .then(result => dispatch(userLoginSuccess(result.body)))
//     .catch(err => { console.log(err) })







// export const UPDATE_USER = 'UPDATE_USER'
// const updateUsers = (users) => ({
//   type: UPDATE_USERS,
//   payload: users
// })
// export const getUsers = () => (dispatch, getState) => {
//   const state = getState()
//   if (!state.currentUser) return null
//   const jwt = state.currentUser.jwt
//   // if (isExpired(jwt)) return dispatch(logout())
//   request
//     .get(`${baseUrl}/users`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(result => dispatch(updateUsers(result.body)))
//     .catch(err => console.log(err))
// }