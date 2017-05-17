import {createStore} from 'redux'
import combinedReducers from '../reducer'

const store = createStore(combinedReducers);

window.store = store; // чисто потестить

export default store