import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reduce'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))