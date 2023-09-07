import { createStore, combineReducers } from 'redux'
import authReducer from './reducer.js'

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer)

export default store
