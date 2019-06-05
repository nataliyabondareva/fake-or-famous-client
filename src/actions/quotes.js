import request from 'superagent'

export const MAKE_UP_QUOTE_SUCCESS = "MAKE_UP_QUOTE_SUCCESS"

const baseUrl = 'http://localhost:4000'

const makeUpQuoteSuccess = (event) => ({
  type: MAKE_UP_QUOTE_SUCCESS,
  event
})

export const makeUpQuote = (content, authorId, userId, real, gameId) => dispatch => {
  request
    .post(`${baseUrl}/quotes`)
    .send({ 
      content: content,   
      authorId: authorId,
      userId: userId,
      real: false,
      gameId: gameId 
    })
    .then(result => {
      dispatch(makeUpQuoteSuccess())
    })
    .catch(err => { console.error(err) })
}