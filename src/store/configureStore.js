import { createStore, combineReducers } from 'redux'

import { login } from '../reducers'

export default () => {
  const store = createStore(
    combineReducers({ login }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}
