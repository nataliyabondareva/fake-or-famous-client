import request from 'superagent'

export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS"

export const QUOTES_FETCHED = 'QUOTES_FETCHED'

const baseUrl = 'http://localhost:4000'

const quotesFetched = games => ({
  type: QUOTES_FETCHED,
  games
})

export const loadGames = () => (dispatch, getState) => {
  if (getState().games) return
  request(`${baseUrl}/games`)
    .then(response => {
      dispatch(quotesFetched(response.body))
    })
    .catch(console.error)
}

const makeUpQuoteSuccess = (event) => ({
  type: MAKE_UP_QUOTE_SUCCESS,
  event
})

export const makeUpQuote = (res) => dispatch => {
  request
    .post(`${baseUrl}/quotes`)
    .send(res)
    // .then(response => {
    //   dispatch(eventCreateSuccess(response.body))
    // })
    .then(console.log('yay!'))
    .catch(console.error)
}

// export const makeUpQuote = (res, req) => dispatch => {
//   console.log('res', res, 'req', req)
//   request
//     .post(`${baseUrl}/quotes`)
//     .send({ 
//       // content: content,   
//       // authorId: authorId,
//       // userId: userId,
//       // real: real,
//       // gameId: gameId 
//     })
//     .then(result => {
//       dispatch(makeUpQuoteSuccess())
//     })
//     .catch(err => { console.error(err) })
// }

// export const makeUpQuote = (content, authorId, userId, real, gameId) => dispatch => {
//   request
//     .post(`${baseUrl}/quotes`)
//     .send({ 
//       content: content,   
//       authorId: authorId,
//       userId: userId,
//       real: real,
//       gameId: gameId 
//     })
//     .then(result => {
//       dispatch(makeUpQuoteSuccess())
//     })
//     .catch(err => { console.error(err) })
// }