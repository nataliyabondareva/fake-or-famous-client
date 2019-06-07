import request from "superagent";
export const QUOTES_FETCHED = "QUOTES_FETCHED";
export const LOAD_REAL_QUOTE = "LOAD_REAL_QUOTE";
export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS";
const baseUrl = "http://localhost:4000";

const author = 'Oscar Wilde'

export const handleChoice = (value) => {
  if (value === true) {
    console.log('yay!');
  } else if (value === false) {
    console.log('i work too');
  }}

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
