import request from "superagent";
const baseUrl = "http://localhost:4000";


export const QUOTES_FETCHED = "QUOTES_FETCHED";

const quotesFetched = quotes => ({
  type: QUOTES_FETCHED,
  quotes
});

export const loadQuotes = () => (dispatch, getState) => {
  request(`${baseUrl}/quotes`)
    .then(response =>
      dispatch(quotesFetched(response.body)))
    .catch(console.log('oh no!'))
}

export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS";

export const makeUpQuote = (req, res) => dispatch => {
  console.log("res", req, "req", res);
  request
    .post(`${baseUrl}/quotes`)
    .send({
      content: req.content,
      real: false,
    })
    .then(console.log("request is", req))
    .then(res => {
      dispatch(makeUpQuoteSuccess(res));
    })
    .catch(err => {
      console.error(err);
    });
}

const makeUpQuoteSuccess = quote => ({
  type: MAKE_UP_QUOTE_SUCCESS,
  quote
})

