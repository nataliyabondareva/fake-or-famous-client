import request from 'superagent'
const { Router } = require('express');

const router = new Router();

const baseUrl = 'http://localhost:4000'

export const GAMES_FETCHED = 'GAMES_FETCHED'
export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS";
export const QUOTES_FETCHED = "QUOTES_FETCHED"

const chooseCorrectQuote = quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const quotesFetched = quotes => ({
  type: QUOTES_FETCHED,
  quotes
})

export const loadRealQuote = id => (dispatch, getState) => {
  // const state = getState().event;
  // if (state && state.id === id) return;
  request(`${baseUrl}/quotes/`)
    .then(response => {
      chooseCorrectQuote(response.body)
      dispatch(quotesFetched(response.body));
    })
    .catch(console.error);
};

export const handleChoice = (value) => {
  if (value === true && this.PaymentResponse.roundsPlayed < 10) {
    this.props.dispatch({
      type: "CORRECT_GUESS"
    })}
    else if (value === false && this.props.roundsPlayed < 10) {
          this.props.dispatch({
            type: "WRONG_GUESS"
          })
      
        } else {
          this.props.dispatch({
            type: "GAME_OVER"
          })
        }
      }


// export const handleChoice = (value) => {
//   if (value === true && this.props.roundsPlayed < 10) {
//     router.get("/quotes", function(req, res, next) {
//       const id = req.params.id;
//     //  const suitableQuote = Quotes.filter(quote => quote.authorId === id);
//       // Quotes.findByPk(id)
//       //   .then(movies => {
//       //     res.json({ movies });
//       // //   })
//       //   .then(response => response.filter(quote => quote.authorId === id))
//       //   .catch(err => {
//       //     res.status(500).json({
//       //       message: "Something went wrong",
//       //       error: err
//       //     });
//         });
//     //});

