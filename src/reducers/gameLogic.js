import { CORRECT_GUESS, WRONG_GUESS } from "../actions/games";

export default (state = null, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return {
        ...state,
        score: state.score + 1,
        roundsPlayed: state.roundsPlayed + 1
      };
    case WRONG_GUESS:
      return {
        ...state,
        roundsPlayed: state.roundsPlayed + 1
      };
    default:
      return state;
  }
};
