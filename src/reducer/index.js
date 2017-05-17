import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selection from './selection'

export default combineReducers({
    counter: counterReducer,
    articles,
    selection
})