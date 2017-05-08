import { createStore } from 'redux'
import rootReducers from '../reducers/index'

export function createInitStore( initStore ){
    return createStore( rootReducers, initStore )
}
