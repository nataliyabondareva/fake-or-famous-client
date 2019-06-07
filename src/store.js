import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import socketset from 'socketset'

const reducer = combineReducers(reducers)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x

  const socket = socketset('localhost:4000')

  const middleware = applyMiddleware(ReduxThunk, socket)
  
  const enhancer = compose(middleware, devTools)
  
  const store = createStore(reducer, enhancer)
  
  const action = { type: 'SOCKETSET_CONNECT' }
  store.dispatch(action)
  
  export default store