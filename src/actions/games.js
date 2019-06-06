/*
current setup 
Can load game from DB that we create
Setup redux store for ADD game having issue implement in container

need to implement GAME SUCCESS actions like in the login 
need the add game to create a sort of lobby which won't start a 
game until <=2 have joined

NEED to implement undate game actions which
will PATCH game for turns / and will for winners
*/
import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const GAMES_FETCHED = 'GAMES_FETCHED'

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
  // const jwt = state.currentUser.jwt
  // if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/games`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addGame(result.body)))
    .catch(err => console.error(err))
}

