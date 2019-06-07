import request from "superagent";
export const QUOTES_FETCHED = "QUOTES_FETCHED";
export const LOAD_REAL_QUOTE = "LOAD_REAL_QUOTE";
export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS";
const baseUrl = "http://localhost:4000";

const chooseCorrectQuote = quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const loadRealQuote = id => (dispatch, getState) => {
  // const state = getState().event;
  // if (state && state.id === id) return;
  request(`${baseUrl}/quotes/`)
    .then(response => {
      dispatch(realQuoteFetched(response.body));
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

export const makeUpQuote = (req, res) => dispatch => {
  request
    .post(`${baseUrl}/quotes`)
    .send({
      content: req.content,
      real: false
    })
    .then(res => {
      dispatch(makeUpQuoteSuccess(res));
    })
    .catch(err => {
      console.error(err);
    });
};

const makeUpQuoteSuccess = quote => ({
  type: MAKE_UP_QUOTE_SUCCESS,
  quote
});
