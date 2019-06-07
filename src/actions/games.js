import request from 'superagent'
import { logout } from './users'
import { isExpired } from '../jwt'


const baseUrl = 'http://localhost:4000'


export const GAMES_FETCHED = 'GAMES_FETCHED'
export const GAME_LOADED = 'GAME_LOADED'
export const UPDATE_GAME = 'UPDATE_GAME'

const gamesFetched = games => ({
  type: GAMES_FETCHED,
  games
})

export const loadGames = () => (dispatch, getState) => {
  if (getState().games) return
  request(`${baseUrl}/games`)
    .then(response => {
      dispatch(gamesFetched(response.body))
    })
    .catch(console.error)
}

export const ADD_GAME = 'ADD_GAME'

const addGame = game => ({
  type: ADD_GAME,
  payload: game
})

export const createGame = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.token
  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addGame(result.body)))
    .catch(err => console.error(err))
}

function updateGame (game) {
  return {
    type: UPDATE_GAME,
    payload: game
  }
}

export const joinGame = (gameId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.token
  console.log('jwt test:', jwt)
  if (isExpired(jwt)) return dispatch(logout())

  request
    .put(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      console.log('joinGame result.body test:', result.body)
      dispatch(updateGame(result.body))
    })
    .catch(err => console.error(err))
}

const gameLoaded = game => {
  return {
    type: GAME_LOADED,
    payload: game
  }
}

export const loadGame = (gameId) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/games/${gameId}`)
    .then(result => {
      console.log('loadGame result.body test:', result.body)
      dispatch(gameLoaded(result.body))
    })
    .catch(err => console.error(err))
}