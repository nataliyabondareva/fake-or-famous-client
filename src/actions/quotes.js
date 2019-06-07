import request from "superagent";
export const QUOTES_FETCHED = "QUOTES_FETCHED";
export const LOAD_REAL_QUOTE = "LOAD_REAL_QUOTE";
export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS";
const baseUrl = "https://safe-dawn-25834.herokuapp.com";

const author = 'Oscar Wilde'

export const handleChoice = (value) => {
  // if (value === true) {
  request
    .post(`${baseUrl}/games/1`)
    .send({
      roundsPlayed: +1,
    })
    // .then(res => {
    //   dispatch(makeUpQuoteSuccess(res));
    // })
    .catch(err => {
      console.error(err);
    });
};
// } else if (value === false) {
//   console.log('i work too');
// }}

const chooseCorrectQuote = quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)].authorId;
};

const returnWrongQuote = quotes => {
  return chooseCorrectQuote.authorId
}

//loads quote based on an author
export const loadRealQuote = id => (dispatch) => {
  request(`${baseUrl}/quotes/`)
    .then(response => response.body.filter(quote => quote.author === author))
    .then(result => {
      dispatch(realQuoteFetched(result));
    })
    .catch(console.error);
};

const realQuoteFetched = quote => ({
  type: LOAD_REAL_QUOTE,
  quote
});

export const loadQuotes = () => (dispatch, getState) => {
  request(`${baseUrl}/quotes`)
    .then(response => dispatch(quotesFetched(response.body)))
    .catch(console.error);
};

const quotesFetched = quotes => ({
  type: QUOTES_FETCHED,
  quotes
});

export const makeUpQuote = (gameId, quote, currentUser) => dispatch => {
  const data = { gameId, quote }
  console.log('data test:', data)
  request
    .post(`${baseUrl}/quotes`)
    .set('Authorization', `Bearer ${currentUser}`)
    .send(data)
    .then(res => {
      dispatch(makeUpQuoteSuccess(res.body));
    })
    .catch(err => {
      console.error(err);
    });
};

const makeUpQuoteSuccess = (game) => ({
  type: "UPDATE_GAME",
  payload: game
});
