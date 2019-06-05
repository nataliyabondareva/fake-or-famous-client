import { MAKE_UP_QUOTE_SUCCESS } from '../actions/quotes'

export default function (state = null, action) {
  switch(action.type) {
    case MAKE_UP_QUOTE_SUCCESS:
      return {
        success: true
      }
    
  default:
    return state
  }
}