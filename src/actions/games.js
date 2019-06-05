import request from 'superagent'

export const GAMES_FETCHED = 'GAMES_FETCHED'

const baseUrl = 'http://localhost:4000'

const gamesFetched = games => ({
  type: GAMES_FETCHED,
  games
})

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/games`)
    .then(response => {
      dispatch(gamesFetched(response.body))
    })
    .catch(console.error)
}