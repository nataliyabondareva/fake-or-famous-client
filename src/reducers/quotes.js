import { MAKE_UP_QUOTE_SUCCESS, QUOTES_FETCHED } from '../actions/quotes'

export default function (state = null, action) {
  switch (action.type) {
    case MAKE_UP_QUOTE_SUCCESS:
      return {
        success: true
      }
    case QUOTES_FETCHED:
      return action.quotes
    default:
      return state
  }
}