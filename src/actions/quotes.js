import request from 'superagent'

export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS"

export const QUOTES_FETCHED = 'QUOTES_FETCHED'

const baseUrl = 'http://localhost:4000'

const quotesFetched = games => ({
  type: QUOTES_FETCHED,
  games
})

export const loadQuotes = () => (dispatch, getState) => {
  if (getState().quotes) return
  request(`${baseUrl}/quotes`)
    .then(response => {
      dispatch(quotesFetched(response.body))
    })
    .catch(console.error)
}

const makeUpQuoteSuccess = (event) => ({
  type: MAKE_UP_QUOTE_SUCCESS,
  event
})

// export const makeUpQuote = (res) => dispatch => {
//   request
//     .post(`${baseUrl}/quotes`)
//     .send(res)
//     .then(response => {
//       dispatch(makeUpQuoteSuccess(response.body))
//     })
//     .then(console.log('yay!'))
//     .catch(console.error)
//}

export const makeUpQuote = (req, res) => dispatch => {
  console.log('res', req, 'req', res)
  request
    .post(`${baseUrl}/quotes`)
    .send({ 
      content: req.content,   
      real: false,

    })
    .then(console.log('request is', req))
    .then(res => {
      dispatch(makeUpQuoteSuccess(res))
    })
    .catch(err => { console.error(err) })
}