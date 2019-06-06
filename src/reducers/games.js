import { GAMES_FETCHED, ADD_GAME } from '../actions/games'

export default (state = null, action) => {
  switch (action.type) {
    case GAMES_FETCHED:
      return action.games
    case ADD_GAME:
      return [...state, action.payload]
    default:
      return state
  }
}