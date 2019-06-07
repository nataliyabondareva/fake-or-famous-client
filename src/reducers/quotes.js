import { QUOTES_FETCHED, LOAD_REAL_QUOTE, SELECT_REAL_QUOTE, CORRECT_GUESS, WRONG_GUESS } from '../actions/quotes'

export default function (state = [], action) {
  switch (action.type) {
    case QUOTES_FETCHED:
      return action.quotes
    case LOAD_REAL_QUOTE:
      return action.quote
      default:
        return state
  }
};
