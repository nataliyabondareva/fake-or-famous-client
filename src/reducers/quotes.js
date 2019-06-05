import { QUOTES_FETCHED } from '../actions/quotes'

export default function (state = null, action) {
  switch (action.type) {
    case QUOTES_FETCHED:
      return [action.event, ...state]

    default:
      return state
  }
}