import {combineReducers} from 'redux'
import counterReducer from './counter'

export default combineReducers({ // возвращаем объединенный Reducer
    counter: counterReducer
})