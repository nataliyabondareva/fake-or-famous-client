import { QUOTES_FETCHED } from '../actions/quotes'

export default function (state = [], action) {
  switch (action.type) {
    case QUOTES_FETCHED:
      return action.quotes
    default:
      return state
  }
}