// store.js
import { createStore, combineReducers } from 'redux'
import authReducer from './reducer.js'

const initialState = {
  auth: {
    user: null,
    upvotedArticles: [],
  },
}

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer, initialState)

export default store
