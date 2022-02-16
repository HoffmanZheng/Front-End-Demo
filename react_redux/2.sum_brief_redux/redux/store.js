import {createStore} from 'redux'
import countReducer from './count_reduce'

export default createStore(countReducer)