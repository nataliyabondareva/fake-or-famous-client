import { GAME_LOADED, UPDATE_GAME } from '../actions/games'

export default (state = null, action) => {
  switch (action.type) {
    case GAME_LOADED:
      console.log('action.payload test:', action.payload)
      return action.payload
    case UPDATE_GAME:
      return action.payload
    default:
      return state
  }
}