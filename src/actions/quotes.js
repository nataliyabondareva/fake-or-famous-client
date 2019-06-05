import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const QUOTES_FETCHED = 'QUOTES_FETCHED'


const quotesFetched = quotes => ({
  type: QUOTES_FETCHED,
  quotes
})

export const loadquotes = () => (dispatch, getState) => {
  if (getState().quotes) return
  request(`${baseUrl}/games/:id/quotes`)
    .then(response => {
      dispatch(quotesFetched(response.body))
    })
    .catch(console.error)
}