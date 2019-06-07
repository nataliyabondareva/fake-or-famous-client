import { GAMES_FETCHED, ADD_GAME, UPDATE_GAME } from '../actions/games'

export default (state = null, action) => {
  switch (action.type) {
    case GAMES_FETCHED:
      return action.games
    case ADD_GAME:
      return [...state, action.payload]
    case UPDATE_GAME:
      return state.map(game => {
        if (game.id === action.payload.id) {
          return action.payload
        } else {
          return game
        }
      })
    default:
      return state
  }
}