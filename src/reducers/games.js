import { GAMES_FETCHED } from '../actions/games'

export default (state = null, action) => {
  switch (action.type) {
    case GAMES_FETCHED:
      return action.games
    default:
      return state
  }
}